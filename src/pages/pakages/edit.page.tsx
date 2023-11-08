import PackageForm from "@/components/package/PakageForm";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import { useGetPackageByIdQuery } from "@/features/packages/packageAPI";
import routepaths from "@/libs/routepaths";
import { useParams } from "react-router-dom";

const PackageEditPageBreadcrumb = [
  {
    label: "Dashboard",
    link: routepaths.dashboard,
  },
  {
    label: "Packages",
    link: routepaths.packages_list,
  },
  {
    label: "Edit Package Details",
  },
];

//

const EditPackagePage = () => {
  const { id } = useParams();

  const { data: packageData, isLoading, error } = useGetPackageByIdQuery(`${id}`);

  console.log(packageData, error);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error while loading Retry later</div>;
  if (!packageData) return <div>No data</div>;
  return (
    <div>
      <BreadCrumb items={PackageEditPageBreadcrumb} />
      <div className="w-full h-full p-4 md:p-8">
        <PackageForm initialvalues={packageData} edit={true} id={`${id}`} />
      </div>
    </div>
  );
};

export default EditPackagePage;
