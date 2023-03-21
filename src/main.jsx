import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./reset.css";
import "./index.css";
import Root from "./pages/root";
import SkillCategoryListComponent from "./pages/skills/skill-category-list.component";
import ProjectListComponent from "./pages/projects/project-list.component";
import SchoolListComponent from "./pages/education/school-list.component";
import JobListComponent from "./pages/work-history/job-list.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "skills",
        element: <SkillCategoryListComponent />,
      },
      {
        path: "projects",
        element: <ProjectListComponent />,
      },
      {
        path: "work-history",
        element: <JobListComponent />,
      },
      {
        path: "education",
        element: <SchoolListComponent />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
