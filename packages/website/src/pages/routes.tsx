import { createBrowserRouter, Outlet } from "react-router-dom";

import { ProjectsRouteElement } from "@/components/layouts/ProjectsLayout";

import { Home } from "@/pages/home";
import { Projects } from "@/pages/projects";

import { RootBoundary } from "@/pages/root-boundary";
import { PageLayout } from "@/components/layouts/PageLayout";
import { WebsocketChat } from "./projects/WebsocketChat";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <Outlet />
      </PageLayout>
    ),
    errorElement: (
      <PageLayout>
        <RootBoundary />
      </PageLayout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/projects",
    element: <ProjectsRouteElement />,
    children: [
      {
        index: true,
        element: <Projects />,
      },
      {
        path: "websocketchat",
        element: <WebsocketChat />,
      },
    ],
  },
]);

export default router;
