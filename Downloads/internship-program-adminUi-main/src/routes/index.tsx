import { PATH } from "constants/path";
import AuthGuard from "guards/auth.guard";
import LoginGuard from "guards/login.guard";
import AdminLayout from "layouts/adminLayout";
import Dashboard from "pages/dashboard";
import Login from "pages/login";
import Orders from "pages/orders";
import Product from "pages/product";
import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/login",
      element: <LoginGuard />,
      children: [{ path: "/login", element: <Login /> }],
    },
    {
      path: "/",
      element: <AdminLayout />,
      children: [
        {
          path: "/",
          element: <AuthGuard />,
          children: [
            { path: "/", element: <Navigate to={PATH.DASHBOARD} /> },
            {
              path: PATH.DASHBOARD,
              element: <Dashboard />,
            },
            {
              path: "/orders",
              element: <Orders />,
            },
            {
              path: "/products",
              element: <Product />,
            }
          ],
        },
      ],
    },
  ]);

  return routing;
}
