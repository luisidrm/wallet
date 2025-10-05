import BottomNavigation from "./BottomNavigation";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main content area */}
      <main className="flex-1 pb-24">
        {children}
      </main>

      <BottomNavigation />
    </div>
  );
}