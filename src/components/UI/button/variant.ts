import { cva } from "class-variance-authority";

export const buttonVariant = cva("btn", {
  variants: {
    variant: {
      default: "border-0",
      outlined: "btn-outline",
      circle: "btn-circle",
      square: "btn-square",
      link: "btn-link",
      ghost: "btn-ghost border-0 bg-[none]",
    },
    size: {
      lg: "btn-md lg:btn-lg",
      normal: "btn-md",
      sm: "btn-sm",
      xs: "btn-xs",
    },
    _color: {
      default: "",
      neutral: "btn-neutral",
      primary: "!btn-primary",
      secondary: "!btn-secondary",
      accent: "!btn-accent",
      warning: "!btn-warning",
      success: "!btn-success",
      error: "!btn-error",
      info: "!btn-info",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "normal",
    _color: "neutral",
  },
});
