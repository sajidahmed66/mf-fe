import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import routepaths from "@/libs/routepaths";
import React from "react";

const trainerCreationPageBreadcrumb = [
  {
    label: "Dashboard",
    link: routepaths.dashboard,
  },
  {
    label: "Trainer List",
    link: routepaths.trainer,
  },
  {
    label: "Add New",
  },
];

const TrainerCreation = () => {
  return (
    <div>
      <BreadCrumb items={trainerCreationPageBreadcrumb} />
      TrainerCreation
    </div>
  );
};

export default TrainerCreation;
