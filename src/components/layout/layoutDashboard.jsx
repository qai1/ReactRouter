import Sidebar from "@/components/sidebar";

export default function LayoutDashboard({ children }) {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar/Header */}
        <header className="h-16 bg-gray-500 shadow-md flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold text-white">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-yellow-300 flex items-center justify-center">
              <span className="text-sm font-semibold text-yellow-600">QA</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-sm p-6 min-h-[calc(100vh-8rem)]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
