import { cva } from "class-variance-authority";

export const textfieldVariant = cva("input w-full text-neutral-500", {
  variants: {
    variant: {
      default: "",
      bordered: `input-bordered`,
      ghost: `input-ghost`,
    },
    _size: {
      xs: "input-xs",
      sm: "input-sm",
      md: "input-md",
      lg: "input-lg",
    },
    input_color: {
      default: "",
      neutral: "input-neutral",
      primary: "input-primary",
      secondary: "input-secondary",
      accent: "input-accent",
      info: "input-info",
      success: "input-success",
      warning: "input-warning",
      error: "input-error",
    },
  },
  defaultVariants: {
    variant: "default",
    _size: "md",
    input_color: "default",
  },
});
