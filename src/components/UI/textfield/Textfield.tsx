import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import { TextFieldProps } from "./types";
import { textfieldVariant } from "./variant";

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { variant, className, _size, input_color, label_name, error, ...props },
    ref
  ) => {
    return (
      <div className="form-control w-full">
        <label className="label">
          <span
            className={cn(`${error?.message ? "text-error" : "label-text"}`)}
          >
            {label_name}
          </span>
        </label>
        <input
          ref={ref}
          className={cn(
            textfieldVariant({
              variant,
              _size,
              input_color: error ? "error" : input_color,
            })
          )}
          {...props}
        />
        <label className="label">
          <span className="text-xs text-error absolute left-4 pt-1">
            {error && error.message}
          </span>
        </label>
      </div>
    );
  }
);
TextField.displayName = "TextField";
export { TextField, textfieldVariant };
