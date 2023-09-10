import { cva } from "class-variance-authority";

export const textareaVariant = cva("textarea w-full text-neutral-500", {
  variants: {
    variant: {
      default: "",
      bordered: `textarea-bordered`,
      ghost: `textarea-ghost`,
    },
    _size: {
      xs: "textarea-xs",
      sm: "textarea-sm",
      md: "textarea-md",
      lg: "textarea-lg",
    },
    _color: {
      default: "",
      neutral: "textarea-neutral",
      primary: "textarea-primary",
      secondary: "textarea-secondary",
      accent: "textarea-accent",
      info: "textarea-info",
      success: "textarea-success",
      warning: "textarea-warning",
      error: "textarea-error",
    },
  },
  defaultVariants: {
    variant: "default",
    _color: "default",
    _size: "md",
  },
});
