import { useState } from "react";
import { X, Menu, User, Package } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-16"
      } bg-gray-600 text-white shadow-md p-4 flex flex-col transition-all duration-450`}
    >
      <div className="flex items-center justify-between mt-1 mb-8">
        {isOpen && <h2 className="text-lg font-semibold">SideBar</h2>}
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="cursor-pointer" /> : <Menu />}
        </button>
      </div>

      <div className="flex flex-col gap-5 mt-">
        <Link
          to="/dashboard/user"
          className="flex border-1 items-center justify-between gap-4 p-2 hover:bg-gray-800 rounded"
        >
          {isOpen && <span>User</span>}
          <User />
        </Link>

        <Link
          to="/dashboard/product"
          className="flex border-1 items-center justify-between gap-4 p-2 hover:bg-gray-800 rounded"
        >
          {isOpen && <span>Product</span>}
          <Package />
        </Link>
      </div>
    </aside>
  );
}
