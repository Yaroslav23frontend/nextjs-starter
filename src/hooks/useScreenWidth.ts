import { useState, useEffect } from "react";

const useScreenWidth = (): number => {
  // State to hold the screen width
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  // Function to update the screen width on window resize
  const handleResize = (): void => {
    setScreenWidth(window.innerWidth);
  };

  // Effect to add event listener on mount and remove on unmount
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenWidth;
};

export default useScreenWidth;
