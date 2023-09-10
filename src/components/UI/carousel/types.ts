export interface CarouselProps<T> {
  data: T[];
  component: React.ComponentType<{ data: T }>;
  itemWidth?: number;
  itemMargin?: number;
}
