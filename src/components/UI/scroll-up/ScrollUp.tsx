"use client";
import useScrollUp from "./useScrollUp";
import { Button } from "../button/Button";
import { BsArrowUpCircle } from "react-icons/bs";
export default function ScrollUp() {
  const { showButton, handleScrollToTop } = useScrollUp();
  return (
    <>
      {showButton && (
        <Button
          onClick={handleScrollToTop}
          name="up"
          variant={"circle"}
          size={"normal"}
          icon={BsArrowUpCircle}
        />
      )}
    </>
  );
}
