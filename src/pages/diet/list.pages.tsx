import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import AddNewBtn from "@/components/common/buttons/AddNewBtn/AddNewBtn";
import routepaths from "@/libs/routepaths";
import { modals } from "@mantine/modals";
import { Text } from "@mantine/core";
import { useDeleteDietMutation, useGetDietListQuery } from "@/features/diets/dietAPI";
import DietListComponent from "@/components/diet/DietList";
import { FC } from "react";

const dietPagebreadcrumb = [
  {
    label: "Dashboard",
    link: routepaths.dashboard,
  },
  {
    label: "Diet List",
  },
];

const DietList: FC = () => {
  const { data: dietData, isLoading, error } = useGetDietListQuery();
  const [deleteDiet, result] = useDeleteDietMutation();
  //
  if (isLoading) return <div>Loading...</div>;
  //
  if (error) return <div>Error while loading Retry later</div>;
  //
  if (!dietData) return <div>No data</div>;
  const HandleDeleteDiet = (id: string) => {
    openDeleteModal(id);
  };
  console.log(result);

  const openDeleteModal = (id: string) =>
    modals.openConfirmModal({
      title: "Delete Diet",
      centered: true,
      children: <Text size="sm">Are you sure you want to delete This Diet?</Text>,
      labels: { confirm: "Delete Diet", cancel: "Cancel" },
      confirmProps: { color: "red" },
      closeOnCancel: true,
      onCancel: () => {},
      onConfirm: () => deleteDiet(id),
    });

  return (
    <div>
      <BreadCrumb items={dietPagebreadcrumb} />
      <div className="h-full w-full p-4 md:p-8">
        <AddNewBtn routepath={routepaths.diet_create} />
        <DietListComponent data={dietData} deleteDiet={HandleDeleteDiet} />
      </div>
    </div>
  );
};

export default DietList;
