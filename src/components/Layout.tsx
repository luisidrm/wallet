import type { ReactNode } from "react";
import BottomNavigation from "./BottomNavigation";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-[100dvw] bg-gray-50 flex flex-col overflow-x-hidden">
        {children}
      <BottomNavigation />
    </div>
  );
}