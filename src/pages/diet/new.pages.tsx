import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import routepaths from "@/libs/routepaths";
import React from "react";

const dietcreatePagebreadcrumb = [
  {
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    label: "Diet List",
    link: routepaths.diet,
  },
  {
    label: "Add New",
  },
];
const DietCreate = () => {
  return (
    <div>
      <BreadCrumb items={dietcreatePagebreadcrumb} />
      DietCreate
    </div>
  );
};

export default DietCreate;
