import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import MainPage from "../page/MainPage";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
]);
