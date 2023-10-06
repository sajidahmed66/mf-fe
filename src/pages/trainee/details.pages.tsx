import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import routepaths from "@/libs/routepaths";
import { FC } from "react";



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
const Traineedetails:FC  = () => {
  return <div>
    <BreadCrumb items={traineeDetailPageBreadcrumb} />
    Traineedetails</div>;
};

export default Traineedetails;
