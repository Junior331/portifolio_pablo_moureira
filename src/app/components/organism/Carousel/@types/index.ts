import { project } from "@/app/utils/types";

export type Props = {
  projects: project[];
};

export type replicateProjectsProps = Props & {
  times: number;
};
