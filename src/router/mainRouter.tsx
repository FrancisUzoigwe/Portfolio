import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import MainPage from "../page/MainPage";
import About from "../page/About";
import Projects from "../page/Projects";
import Resume from "../page/Resume";
import Skills from "../page/Skills";
import Contact from "../page/Contact";
import Blogs from "../page/Blogs";
import BlogLayout from "../components/layout/BlogLayout";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },

  {
    path: "/blogs",
    element: <BlogLayout />,
    children: [
      {
        index: true,
        element: <Blogs />
      }
    ]
  }
]);
