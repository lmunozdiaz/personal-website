import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import SchoolList from "./views/Education/SchoolList";
import ProjectList from "./views/Projects/ProjectList";
import SkillList from "./views/Skills/SkillList";
import JobList from "./views/WorkHistory/JobList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "projects",
        element: <ProjectList />,
      },
      {
        path: "work-history",
        element: <JobList />,
      },
      {
        path: "education",
        element: <SchoolList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
