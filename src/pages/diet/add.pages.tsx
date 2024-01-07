import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import DietForm from "@/components/diet/DietForm";
import routepaths from "@/libs/routepaths";
import { FC } from "react";

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
const DietCreate: FC = () => {
  return (
    <div>
      <BreadCrumb items={dietcreatePagebreadcrumb} />
      <div className="mt-4">DietCreate</div>
      <div className="h-full w-full p-4 md:p-8">
        <DietForm edit={false} />
      </div>
    </div>
  );
};

export default DietCreate;
