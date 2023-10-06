import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import routepaths from "@/libs/routepaths";
import { FC } from "react";


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

const TrainerCreation: FC  = () => {
  return (
    <div>
      <BreadCrumb items={trainerCreationPageBreadcrumb} />
      TrainerCreation
    </div>
  );
};

export default TrainerCreation;
