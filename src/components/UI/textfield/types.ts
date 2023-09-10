import { InputHTMLAttributes } from "react";
import { textfieldVariant } from "./Textfield";
import { FieldError } from "react-hook-form";
import { VariantProps } from "class-variance-authority";

export interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textfieldVariant> {
  error?: FieldError | undefined;
  label_name?: string;
}
