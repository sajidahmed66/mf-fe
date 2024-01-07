import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import { useDeleteExerciseMutation, useGetExercisesLisQuery } from "@/features/exercies/exerciesAPI";
import routepaths from "@/libs/routepaths";
import { modals } from "@mantine/modals";
import { FC } from "react";
import { Text } from "@mantine/core";
import AddNewBtn from "@/components/common/buttons/AddNewBtn/AddNewBtn";
import WorkoutList from "@/components/workout/WorkoutList";

const workoutListPageBreadcrumb = [
  {
    label: "Dashboard",
    link: routepaths.dashboard,
  },
  {
    label: "Workout List",
    // link: routepaths.workout,
  },
  // {
  //   label: "add new",
  // link: routepaths.workout_create,
  // },
];

const WorkoutListPage: FC = () => {
  const { data: workoutData, isLoading, error } = useGetExercisesLisQuery();
  const [deleteWorkout] = useDeleteExerciseMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error while loading Retry later</div>;
  if (!workoutData) return <div>No data</div>;

  const HandleDeleteWorkout = (id: string) => {
    openDeleteModal(id);
  };

  const openDeleteModal = (id: string) =>
    modals.openConfirmModal({
      title: "Delete Workout",
      centered: true,
      children: <Text size="sm">Are you sure you want to delete This workout?</Text>,
      labels: { confirm: "Delete Workout", cancel: "Cancel" },
      confirmProps: { color: "red" },
      closeOnCancel: true,
      onConfirm: () => deleteWorkout(id),
    });
  return (
    <div>
      <BreadCrumb items={workoutListPageBreadcrumb} />
      <AddNewBtn routepath={routepaths.workout_create} />
      <WorkoutList data={workoutData} deleteWorkout={HandleDeleteWorkout} />
    </div>
  );
};

export default WorkoutListPage;
