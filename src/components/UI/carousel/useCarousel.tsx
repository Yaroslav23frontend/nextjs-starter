import { useCallback, useMemo, useRef, useState } from "react";

export default function useCarousel({
  itemWidth,
  itemMargin,
}: {
  itemWidth: number;
  itemMargin: number;
}) {
  const carouselRef = useRef<HTMLUListElement | null>(null);
  const [carouselPosition, setCarouselPosition] = useState(0);
  const currentItem = useMemo(() => {
    return Math.round(carouselPosition / (itemWidth + itemMargin));
  }, [carouselPosition, itemWidth, itemMargin]);
  const scrollToItem = useCallback(
    (slider: HTMLUListElement | null, slideIndex: number) => {
      if (!slider) return;
      slider.scrollTo({
        left: slideIndex * (itemWidth + itemMargin),
        behavior: "smooth",
      });
    },
    [itemWidth, itemMargin]
  );
  const scrolledToEndOfCarousel = useMemo(() => {
    if (!carouselRef.current) return false;
    return (
      carouselRef.current.scrollWidth -
        carouselRef.current.scrollLeft -
        carouselRef.current.clientWidth ===
      0
    );
  }, []);

  const next = useCallback(() => {
    scrollToItem(carouselRef.current, currentItem + 1);
  }, [currentItem, scrollToItem]);
  const prev = useCallback(() => {
    scrollToItem(carouselRef.current, currentItem - 1);
  }, [currentItem, scrollToItem]);
  return {
    carouselRef,
    next,
    prev,
    scrolledToEndOfCarousel,
    carouselPosition,
    setCarouselPosition,
    currentItem,
  };
}
