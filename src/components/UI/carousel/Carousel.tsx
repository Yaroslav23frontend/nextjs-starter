"use client";
import { Button } from "../button/Button";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { cn } from "@/utils/cn";
import useCarousel from "./useCarousel";
import { CarouselProps } from "./types";

export default function Carousel<T>({
  data,
  component,
  itemWidth = 400,
  itemMargin = 20,
}: CarouselProps<T>) {
  const Component = component;
  const {
    carouselRef,
    setCarouselPosition,
    currentItem,
    next,
    prev,
    scrolledToEndOfCarousel,
  } = useCarousel({
    itemWidth,
    itemMargin,
  });
  return (
    <div className="mx-auto w-full">
      <ul
        ref={carouselRef}
        onScroll={(e) => {
          setCarouselPosition(e.currentTarget.scrollLeft);
          console.log(e.currentTarget.scrollLeft);
        }}
        className={`flex pb-10 overflow-x-auto snap-x gap-5 max-w-7xl mx-auto no-scrollbar ${
          data.length < 4 && "xl:justify-center"
        } ${data.length === 1 && "justify-center"}`}
      >
        {data.map((el, id) => (
          <li
            key={id}
            className={cn(
              `snap-start snap-always flex flex-col shrink-0 justify-center items-center`
            )}
          >
            <div className="relative w-full">
              <Component data={el} />
            </div>
          </li>
        ))}
      </ul>
      <div
        className={cn(
          `flex justify-center gap-2 -mt-2 ${data.length < 4 && "xl:hidden"} ${
            data.length === 1 && "hidden"
          }`
        )}
      >
        <Button
          disabled={currentItem === 0}
          onClick={prev}
          name="prev"
          size={"sm"}
          variant={"circle"}
          _color="default"
        >
          <div className="w-6 h-6">
            <MdChevronLeft className="!w-full !h-full fill-neutral-300" />
          </div>
        </Button>
        <Button
          disabled={scrolledToEndOfCarousel || currentItem === data.length}
          onClick={next}
          name="next"
          size={"sm"}
          variant={"circle"}
          _color="default"
        >
          <div className="w-6 h-6">
            <MdChevronRight className="!w-full !h-full fill-neutral-300" />
          </div>
        </Button>
      </div>
    </div>
  );
}
