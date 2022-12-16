import { classed } from "@tw-classed/react";

export const Button = classed(
  "button",
  "bg-neonblue rounded-xl text-xl font-bold",
  {
    variants: {
      size: {
        default: "py-2.5 px-8",
        medium: "py-4 px-8",
        big: "py-8 px-8",
      },
    },
  }
);
