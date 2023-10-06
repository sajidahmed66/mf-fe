import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import routepaths from "@/libs/routepaths";

const DietList = () => {
  const dietPagebreadcrumb = [
    {
      label: "Dashboard",
      link: routepaths.dashboard,
    },
    {
      label: "Diet List",
    },
  ];
  return (
    <div>
      <BreadCrumb items={dietPagebreadcrumb} />
    </div>
  );
};

export default DietList;
