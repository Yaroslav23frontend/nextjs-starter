import { cva } from "class-variance-authority";

export const spinnerVariant = cva("loading loading-spinner", {
  variants: {
    _size: {
      lg: "loading-lg",
      md: "loading-md",
      sm: "loading-sm",
      xs: "loading-xs",
    },
    _color: {
      default: "",
      neutral: "text-neutral-400",
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      ghost: "text-ghost",
      link: "text-link",
      warning: "text-warning",
    },
  },
  defaultVariants: {
    _size: "md",
    _color: "default",
  },
});
