import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Menu, User, Package } from "lucide-react";
import React from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <aside>
      <div>
        {isOpen && <h2 className="">Dashboard</h2>}
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <div>
        <Link to="/dashboard/user">
          {isOpen && <span>User</span>}
          <User />
        </Link>
        <Link to="/dashboard/product">
          {isOpen && <span>Product</span>}
          <Package />
        </Link>
      </div>
    </aside>
  );
}
