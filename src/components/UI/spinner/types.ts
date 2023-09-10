import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { spinnerVariant } from "./variant";

export interface SpinnerProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof spinnerVariant> {}
