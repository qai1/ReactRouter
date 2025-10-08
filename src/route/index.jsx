import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login.jsx";
import Register from "../pages/register.jsx";
import Dashboard from "../pages/dashboard/dashboard.jsx";
import NotFound from "../pages/404notfound.jsx";

export function Route() {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "*", element: <NotFound /> },
    { path: "/register", element: <Register /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/dashboard/user", element: <Dashboard /> },
    { path: "/dashboard/product", element: <Dashboard /> },
  ]);
  return <RouterProvider router={router} />;
}
