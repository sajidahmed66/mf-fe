import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import AddTrainer from "@/components/trainer/AddTrainer";
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

const TrainerCreation: FC = () => {
  return (
    <div>
      <BreadCrumb items={trainerCreationPageBreadcrumb} />
      <AddTrainer />
    </div>
  );
};

export default TrainerCreation;
