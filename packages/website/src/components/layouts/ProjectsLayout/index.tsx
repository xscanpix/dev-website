import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { RootLayout } from "../RootLayout";
import { ContentLayout } from "../ContentLayout";

interface ProjectsLayoutProps extends PropsWithChildren {}

const ProjectsLayout = ({ children }: ProjectsLayoutProps) => {
  return (
    <RootLayout>
      <div className="flex">
        <ContentLayout>{children}</ContentLayout>
      </div>
    </RootLayout>
  );
};

const ProjectsRouteElement = () => {
  return (
    <ProjectsLayout>
      <Outlet />
    </ProjectsLayout>
  );
};

export { ProjectsLayout, ProjectsRouteElement };
