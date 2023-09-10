import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import { TextAreaFieldProps } from "./types";
import { textareaVariant } from "./variant";

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ variant, className, _size, _color, label_name, error, ...props }, ref) => {
    return (
      <div className="form-control w-full">
        <label className="label">
          <span
            className={cn(`${error?.message ? "text-error" : "label-text"}`)}
          >
            {label_name}
          </span>
        </label>
        <textarea
          ref={ref}
          className={cn(
            textareaVariant({
              variant,
              _size,
              _color: error ? "error" : _color,
              className,
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
TextArea.displayName = "TextArea";
export { TextArea, textareaVariant };
