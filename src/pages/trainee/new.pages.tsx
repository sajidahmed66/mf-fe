import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import AddTrainee from "@/components/trainee/AddTrainee";
import routepaths from "@/libs/routepaths";

const traineeCreationPageBreadcrumb = [
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

const TraineeCreation = () => {
  return (
    <div>
      <BreadCrumb items={traineeCreationPageBreadcrumb} />
      <AddTrainee />
    </div>
  );
};

export default TraineeCreation;
