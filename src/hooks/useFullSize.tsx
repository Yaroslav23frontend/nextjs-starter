import { useEffect, useState } from "react";

export default function useFullSize() {
  const [fullSize, setFullSize] = useState(false);
  useEffect(() => {
    const closeOnScroll = () => {
      if (fullSize) {
        setFullSize(false);
      }
    };
    window.addEventListener("scroll", closeOnScroll);
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, [fullSize]);
  const setClose = () => {
    setFullSize(false);
  };
  return {
    fullSize,
    setFullSize,
    setClose,
  };
}
