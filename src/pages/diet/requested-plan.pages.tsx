import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import routepaths from "@/libs/routepaths";
import React from "react";

const DietPlanRequests = () => {
  const dietReqPageBreadcrumb = [
    {
      label: "Dashboard",
      link: routepaths.dashboard,
    },
    {
      label: "Diet List",
      link: routepaths.diet,
    },
    {
      label: "Diet Requests",
    },
  ];
  return (
    <div>
      <BreadCrumb items={dietReqPageBreadcrumb} />
      DietPlan Requests
    </div>
  );
};

export default DietPlanRequests;
