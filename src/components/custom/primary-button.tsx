import { IconArrowRight } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

import { Button, ButtonProps } from "../ui/button";

interface Props extends ButtonProps {
  withIcon?: boolean;
  inverse?: boolean;
}

export const PrimaryButton = ({
  withIcon = true,
  inverse = false,
  ...props
}: Props) => {
  return (
    <Button
      {...props}
      asChild={props.asChild}
      size="lg"
      className={cn(
        "gap-4 px-1.5 pl-5",
        !inverse
          ? "bg-gradient-to-r from-blue-700 to-blue-500"
          : "bg-white pr-3 text-blue-700",
        props.className
      )}
    >
      {props.children}
      {withIcon ? (
        <div
          className={cn(
            "flex items-center justify-center",
            !inverse
              ? "size-9 rounded-lg bg-white text-blue-600"
              : "size-8 rounded-full bg-blue-600 text-white"
          )}
        >
          <IconArrowRight />
        </div>
      ) : null}
    </Button>
  );
};
