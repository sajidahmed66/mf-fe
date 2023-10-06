import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import routepaths from "@/libs/routepaths";
import React from "react";
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
const TraineeList = () => {
  return (
    <div>
      <BreadCrumb items={TraineeListPageBreadcrumb} />
      TraineeList
    </div>
  );
};

export default TraineeList;
