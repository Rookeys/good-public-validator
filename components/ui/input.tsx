import * as React from "react"

import { cn } from "@/lib/utils"
import { VariantProps, cva } from 'class-variance-authority';

const inputVariants = cva(
  "flex h-10 w-full rounded border bg-background px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-offset-0 disabled:bg-gray/30 !border-[#c4c9ce]",
  {
    variants: {
      variant: {
        default: "border-input focus-visible:ring-ring ",
        gray: "border-gray focus-visible:ring-gray ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input"

export { Input }
