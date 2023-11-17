import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import TraineeForm from "@/components/trainee/TraineeForm";
import { useGetPackagesQuery } from "@/features/packages/packageAPI";
import { useGetTraineeByIdQuery } from "@/features/trainee/traineeAPI";
import routepaths from "@/libs/routepaths";
import { FC } from "react";
import { useParams } from "react-router-dom";

const traineeEditPageBreadcrumb = [
  {
    label: "Dashboard",
    link: routepaths.dashboard,
  },
  {
    label: "Trainee",
    link: routepaths.trainee,
  },
  {
    label: "Add New",
  },
];

const EditTraineePage: FC = () => {
  const { id } = useParams();

  const { data: traineeData, isLoading, isError, error } = useGetTraineeByIdQuery(`${id}`);

  console.log({ traineeData, isLoading, isError, error });
  return (
    <>
      <BreadCrumb items={traineeEditPageBreadcrumb} />
      <div className="h-full w-full p-4 md:p-8">
        <TraineeForm edit={true} id={`${id}`} />
      </div>
    </>
  );
};

export default EditTraineePage;
