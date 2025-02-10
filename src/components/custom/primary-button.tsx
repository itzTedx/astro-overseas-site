import { IconArrowRight } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

import { Button, ButtonProps } from "../ui/button";

interface Props extends ButtonProps {
  withIcon?: boolean;
}

export const PrimaryButton = ({ withIcon = true, ...props }: Props) => {
  return (
    <Button
      {...props}
      asChild={props.asChild}
      size="lg"
      className={cn(
        "gap-4 bg-gradient-to-r from-blue-700 to-blue-500 px-1.5 pl-5",
        props.className
      )}
    >
      {props.children}
      {withIcon ? (
        <div className="flex size-9 items-center justify-center rounded-lg bg-white text-blue-600">
          <IconArrowRight />
        </div>
      ) : null}
    </Button>
  );
};
