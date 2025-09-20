"use client"
import { ModeToggle } from "@/components/ui/toggle";

export function Header() {
  return (
    <div className="flex justify-around mt-10 w-[70vw] items-center max-w-screen-md">
        <div className="font-inter text-xl">
         DashBoard
        </div>
        <div>
        <ModeToggle />
        </div>
    </div>
  )
}

