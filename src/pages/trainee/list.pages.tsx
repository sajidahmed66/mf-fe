import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import routepaths from "@/libs/routepaths";
import { FC } from "react";

const TraineeListPageBreadcrumb = [
  {
    label: "Dashboard",
    link: routepaths.dashboard,
  },
  {
    label: "Traniee",
    // link: routepaths.trainee,
  },
];
const TraineeList:FC  = () => {
  return (
    <div>
      <BreadCrumb items={TraineeListPageBreadcrumb} />
      TraineeList
    </div>
  );
};

export default TraineeList;
