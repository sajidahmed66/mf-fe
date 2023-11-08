import PackageForm from "@/components/package/PakageForm";
import { useGetPackageByIdQuery } from "@/features/packages/packageAPI";
import { useParams } from "react-router-dom";

//

const EditPackagePage = () => {
  const { id } = useParams();
  const { data: packageData, isLoading, error } = useGetPackageByIdQuery(`${id}`);
  if (isLoading) {
    return <>Loading ...</>;
  }
  if (error) {
    return <>Error while loading</>;
  }
  return (
    <div>
      <PackageForm initialvalues={packageData} edit={true} id={`${id}`} />
    </div>
  );
};

export default EditPackagePage;
