import { Outlet } from "react-router"
import BottomNavigation from "./BottomNavigation";

export default function Layout() {
  return (
    <div className="min-h-screen w-[100dvw] bg-gray-50 flex flex-col overflow-x-hidden">
      <Outlet/>
      <BottomNavigation />
    </div>
  );
}