"use client";

import { Button } from "@/components/ui/button";

type ButtonRoundedProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon: React.ReactNode;
};

export function ButtonRounded({ onClick, icon }: ButtonRoundedProps) {
  return (
    <div className="flex flex-col gap-8">
      <Button
        variant="outline"
        size="icon"
        className="rounded-5 cursor-pointer"
        onClick={onClick}
      >
        {icon}
      </Button>
    </div>
  );
}
