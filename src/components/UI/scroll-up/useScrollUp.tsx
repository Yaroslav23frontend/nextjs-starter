import { useEffect, useRef, useState } from "react";

export default function useScrollUp() {
  const [showButton, setShowButton] = useState(false);
  const prevScroll = useRef<number>(0);
  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      const scrollHeight =
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight,
          document.body.clientHeight,
          document.documentElement.clientHeight
        ) - window.innerHeight;
      if (window.scrollY > 300 && prevScroll.current > window.scrollY) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
      prevScroll.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);
  return { showButton, handleScrollToTop };
}
