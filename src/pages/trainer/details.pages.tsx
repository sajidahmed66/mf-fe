import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import routepaths from "@/libs/routepaths";
import React from "react";

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

const TrainerDetails = () => {
  return (
    <div>
      <BreadCrumb items={trainerDtailsPageBreadcrumb} />
      TranierDetails
    </div>
  );
};

export default TrainerDetails;
