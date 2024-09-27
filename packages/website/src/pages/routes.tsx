import { Route, Routes } from "react-router-dom";

import { RootLayout } from "@/components/layouts/RootLayout";
import { ProjectsLayout } from "@/components/layouts/ProjectsLayout";

import { Home } from "@/pages/Home";
import { Projects } from "@/pages/Projects";
import { About } from "@/pages/About";
import { RootBoundary } from "@/pages/RootBoundary";

const routes = (
  <Routes>
    <Route path="/" element={<RootLayout />} errorElement={<RootBoundary />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<ProjectsLayout />}>
        <Route index element={<Projects />} />
      </Route>
    </Route>
  </Routes>
);

export default routes;
