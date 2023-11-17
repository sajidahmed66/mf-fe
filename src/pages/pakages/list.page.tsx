import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import PackageList from "@/components/package/PackageList";
import { useDeletePackageMutation, useGetPackagesQuery } from "@/features/packages/packageAPI";
import routepaths from "@/libs/routepaths";
import { Text } from "@mantine/core";
import { FC } from "react";
import { modals } from "@mantine/modals";
import AddNewBtn from "@/components/common/buttons/AddNewBtn/AddNewBtn";
const PackageListPageBreadcrumb = [
  {
    label: "Dashboard",
    link: routepaths.dashboard,
  },
  {
    label: "Packages",
  },
];

const PackageListPage: FC = () => {
  const { data: packageData, isLoading, error } = useGetPackagesQuery();
  const [deletePackage, result] = useDeletePackageMutation();
  //
  if (isLoading) return <div>Loading...</div>;
  //
  if (error) return <div>Error while loading Retry later</div>;
  //
  if (!packageData) return <div>No data</div>;
  const HandleDeletePackage = (id: string) => {
    openDeleteModal(id);
  };
  console.log(result);

  const openDeleteModal = (id: string) =>
    modals.openConfirmModal({
      title: "Delete Package",
      centered: true,
      children: <Text size="sm">Are you sure you want to delete This package?</Text>,
      labels: { confirm: "Delete package", cancel: "Cancel" },
      confirmProps: { color: "red" },
      closeOnCancel: true,
      onCancel: () => {},
      onConfirm: () => deletePackage(id),
    });

  return (
    <div>
      <BreadCrumb items={PackageListPageBreadcrumb} />
      <div className="h-full w-full p-4 md:p-8">
        <AddNewBtn routepath={routepaths.add_package} />
        <PackageList data={packageData} deletePackage={HandleDeletePackage} />
      </div>
    </div>
  );
};

export default PackageListPage;
