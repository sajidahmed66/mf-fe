import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import routepaths from "@/libs/routepaths";
import React from "react";


const traineeDetailPageBreadcrumb = [
  {
    label: "Dashboard",
    link: routepaths.dashboard,
  },
  {
    label: "Trainee",
    link: routepaths.trainee,
  },
  {
    label: "Details",
  },
];
const Traineedetails = () => {
  return <div>
    <BreadCrumb items={traineeDetailPageBreadcrumb} />
    Traineedetails</div>;
};

export default Traineedetails;
