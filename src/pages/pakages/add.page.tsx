import PackageForm from "@/components/package/PakageForm";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
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
        <PackageForm edit={false} />
      </div>
    </div>
  );
};

export default AddPackagePage;
