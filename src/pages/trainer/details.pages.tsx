import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import routepaths from "@/libs/routepaths";
import { FC } from "react";

const trainerDtailsPageBreadcrumb = [
  {
    label: "Dashboard",
    link: routepaths.dashboard,
  },
  {
    label: "Trainer List",
    link: routepaths.trainer,
  },
  {
    label: "Trainer Details",
  },
];

const TrainerDetails:FC  = () => {
  return (
    <div>
      <BreadCrumb items={trainerDtailsPageBreadcrumb} />
      TranierDetails
    </div>
  );
};

export default TrainerDetails;
