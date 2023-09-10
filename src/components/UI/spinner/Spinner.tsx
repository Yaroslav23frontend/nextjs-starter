import { cn } from "@/utils/cn";
import { forwardRef } from "react";
import { SpinnerProps } from "./types";
import { spinnerVariant } from "./variant";

const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, _size, _color, ...props }, ref) => {
    return (
      <span
        className={cn(spinnerVariant({ _size, _color, className }))}
        {...props}
      ></span>
    );
  }
);
Spinner.displayName = "Spinner";
export { Spinner };
