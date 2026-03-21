import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";

type AuthButtonProps = {
    is_authorized: boolean
};

export function AuthButtons({ is_authorized }: AuthButtonProps) {
    if (is_authorized) return null;

    return (
        <div
          className="flex flex-row gap-1"
        >
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => redirect("/login")}
          >
            Sign In
          </Button>
          <Button
            variant="secondary"
            className="cursor-pointer hover:bg-[#222] bg-black text-white dark:bg-[#ffffff30] dark:hover:bg-[#ffffff60]"
            onClick={() => redirect("/sign-up")}
          >
            Sign Up
          </Button>
        </div>
    )
}