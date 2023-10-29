import { useAppSelector } from "@/app/hooks";
import { useGetPackagesQuery } from "@/features/packages/packageAPI";
import { FC } from "react";

const PackageListPage: FC = () => {
  const token = useAppSelector((state) => state.auth.accessToken);
  console.log({ token });
  const { data, isLoading, error } = useGetPackagesQuery();
  console.log({ data, isLoading, error });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>No data</div>;

  return <div>PackageListPage</div>;
};

export default PackageListPage;
