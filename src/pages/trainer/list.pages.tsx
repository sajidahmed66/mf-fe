import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import routepaths from "@/libs/routepaths";
import React from "react";

const trainerListPageBreadcrumb = [
  {
    label: "Dashboard",
    link: routepaths.dashboard,
  },
  {
    label: "Trainer List",
    // link: routepaths.trainer,
  },
];

const TrainerList = () => {
  return (
    <div>
      <BreadCrumb items={trainerListPageBreadcrumb} />
      TrainerList
    </div>
  );
};

export default TrainerList;
