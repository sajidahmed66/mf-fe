import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import WorkoutForm from "@/components/workout/WorkoutForm";
import routepaths from "@/libs/routepaths";
import { FC } from "react";

const workoutCreatePageBreadcrumb = [
  {
    label: "Dashboard",
    link: routepaths.dashboard,
  },
  {
    label: "Workout List",
    link: routepaths.workout,
  },
  {
    label: "add new",
    // link: routepaths.workout_create,
  },
];
const CreateWorkout: FC = () => {
  return (
    <div>
      <BreadCrumb items={workoutCreatePageBreadcrumb} />
      <WorkoutForm />
    </div>
  );
};

export default CreateWorkout;
