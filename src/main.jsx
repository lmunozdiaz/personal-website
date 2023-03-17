import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./reset.css";
import "./index.css";
import Root from "./pages/Root";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import SkillsPage from "./pages/Skills/SkillsPage";
import Education from "./pages/Education/EducationPage";
import Experience from "./pages/Experience/ExperiencePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "skills",
        element: <SkillsPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "education",
        element: <Education />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
