import BottomNavigation from "./BottomNavigation";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-[100dvw] bg-gray-50 flex flex-col overflow-x-hidden">
        {children}
      <BottomNavigation />
    </div>
  );
}