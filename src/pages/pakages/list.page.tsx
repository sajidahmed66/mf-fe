import PackageList from "@/components/package/PackageList";
import { useGetPackagesQuery } from "@/features/packages/packageAPI";
import routepaths from "@/libs/routepaths";
import { Button } from "@mantine/core";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const PackageListPage: FC = () => {
  const navigate = useNavigate();
  const { data: packageData, isLoading, error } = useGetPackagesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error while loading Retry later</div>;
  if (!packageData) return <div>No data</div>;

  return (
    <>
      <div className="h-22 flex w-full flex-row items-center justify-end">
        <Button variant="filled" onClick={() => navigate(routepaths.add_package)}>
          Add New
        </Button>
      </div>
      <PackageList data={packageData} />
    </>
  );
};

export default PackageListPage;
