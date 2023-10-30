import { useAppSelector } from "@/app/hooks";
import PackageList from "@/components/package/PackageList";
import { useGetPackagesQuery } from "@/features/packages/packageAPI";
import { FC } from "react";

const PackageListPage: FC = () => {
  const token = useAppSelector((state) => state.auth.accessToken);
  console.log({ token });
  const { data: packageData, isLoading, error } = useGetPackagesQuery();
  console.log({ packageData, isLoading, error });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!packageData) return <div>No data</div>;

  return <PackageList data={packageData} />;
};

export default PackageListPage;
