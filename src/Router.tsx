import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error404";
import { History } from "./pages/History";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/history",
    element: <History />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
