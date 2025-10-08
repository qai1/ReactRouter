import React from "react";

export default function LayoutDashboard({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex p-6 bg-gray-50">{children}</div>
    </div>
  );
}
