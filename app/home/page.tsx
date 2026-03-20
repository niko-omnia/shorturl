"use client";

import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "../components/themeToggle";

export default function Home() {
  return (
    <div className="flex min-h-svh p-5">
      <ThemeToggle />
      <div className="flex fixed top-0 left-0 w-full h-15">
        <div className="w-[50%] h-full bg-red-500">

        </div>
        <div className="w-[50%] h-full bg-blue-500">

        </div>
      </div>
      <div className="flex flex-col justify-center w-full min-h-full mt-10 text-center items-center">
          <h1 className="text-6xl mb-3 w-[50%]">
            Build stronger online connections
          </h1>
          <h2 className="text-2xl text-gray-700 dark:text-gray-400 font-light mb-6 w-2xl">
            Shorten links, share them anywhere, and track every click with fast, simple, and powerful analytics.
          </h2>
          <div
            className="flex flex-row gap-2 mt-1"
          >
            <Input
              className="pt-5 pb-5 outline-none"
              placeholder="Enter Link"
            />
            <Button
              variant="outline"
              className="p-4 pt-5 pb-5 rounded-5 cursor-pointer"
              onClick={() => redirect("/create")}
            >
              Shorten
            </Button>
          </div>
      </div>
    </div>
  );
}
