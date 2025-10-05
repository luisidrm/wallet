import { Home, Notebook } from "lucide-react";
import { Link } from "react-router";

export default function BottomNavigation() {
  return (
    <div className="fixed bottom-0 w-full bg-transparent place-items-center flex justify-center left-0 right-0 mx-4 mb-4">
      <div className="flex justify-around items-center mx-auto bg-green-300 p-2 rounded-3xl shadow-lg">
        <Link to={"/dashboard"} className="p-3 flex justify-center place-items-center hover:bg-green-400 rounded-full transition-colors">
          <Home /><span className=" ml-2">Dashboard</span>
        </Link>
        <Link to={"/historic"} className="p-3 flex justify-center place-items-center hover:bg-green-400 rounded-full transition-colors">
          <Notebook /><span className=" ml-2">Historic</span>
        </Link>
      </div>
    </div>
  );
}