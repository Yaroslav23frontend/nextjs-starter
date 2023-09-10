import { cn } from "@/utils/cn";
import { forwardRef } from "react";
import { buttonVariant } from "./variant";
import { ButtonProps } from "./types";
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, name, size, variant, _color, children, icon, text, ...props },
    ref
  ) => {
    const Icon = icon;
    return (
      <button
        name={name}
        ref={ref}
        className={cn(
          buttonVariant({
            variant,
            size,
            _color,
            className: `${className} ${
              _color === "default" &&
              variant === "outlined" &&
              "!text-neutral-700 hover:!bg-opacity-100 hover:!bg-neutral"
            }`,
          })
        )}
        {...props}
      >
        {Icon && <Icon />}
        {text}
        {!text && children}
      </button>
    );
  }
);
Button.displayName = "Button";
export { Button };
