import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import PakageForm from "@/components/package/PakageForm";
import routepaths from "@/libs/routepaths";

const PackageAddPageBreadcrumb = [
  {
    label: "Dashboard",
    link: routepaths.dashboard,
  },
  {
    label: "Packages",
    link: routepaths.packages_list,
  },
  {
    label: "Add New Package",
  },
];

const AddPackagePage = () => {
  return (
    <div>
      <BreadCrumb items={PackageAddPageBreadcrumb} />
      <div className="w-full h-full p-4 md:p-8">
        <PakageForm />
      </div>
    </div>
  );
};

export default AddPackagePage;
