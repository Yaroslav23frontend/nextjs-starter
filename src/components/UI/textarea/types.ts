import { TextareaHTMLAttributes } from "react";
import { textareaVariant } from "./Textarea";
import { VariantProps } from "class-variance-authority";
import { FieldError } from "react-hook-form";

export interface TextAreaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariant> {
  error?: FieldError | undefined;
  label_name?: string;
}
