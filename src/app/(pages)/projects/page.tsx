"use client";

import { useEffect, useState } from "react";

import { fetchProjects } from "./services";
import { project } from "@/app/utils/types";
import { emptyProject } from "@/app/utils/emptys";
import { Card, Layout } from "@/app/components/organism";

export default function Projects() {
  const [listProjects, setListProjects] = useState<project[]>([emptyProject]);

  useEffect(() => {
    fetchProjects().then((allProjects: project[]) => {
      setListProjects(allProjects);
    });
  }, []);

  return (
    <Layout>
      <div className="w-screen h-auto flex flex-col justify-start items-start px-8">
        {Boolean(listProjects[0].id) && <Card projects={listProjects || []} />}
      </div>
    </Layout>
  );
}
