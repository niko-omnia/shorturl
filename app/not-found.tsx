"use client";

import { redirect, usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import { Header } from "./components/header";

export default function notFound() {
    const pathname = usePathname();
    if (pathname === "/") redirect("/home");
    
    return (
        <div className="absolute w-full h-full flex flex-col flex-1 items-center justify-center font-sans">
            <Header />
            <main className="flex gap-6 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-center">
                <div className="flex flex-col items-center text-center gap-3">
                    <h1 className="max-w-full text-6xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 mb-1">
                        404
                    </h1>
                    <div className="flex flex-col bg-clip-text text-transparent bg-linear-to-b from-gray-950 to-gray-800 dark:from-gray-100 dark:to-gray-400">
                        <p className="text-xl">
                            This page seems to have wandered off.
                        </p>
                        <p className="text-xl mb-2">
                            Let’s get you back on track.
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        className="p-5 flex gap-2 cursor-pointer"
                        onClick={() => redirect("/")}
                    >
                        <HomeIcon />
                        Back Home
                    </Button>
                </div>
            </main>
        </div>
    );
}
