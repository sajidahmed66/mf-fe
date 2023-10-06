import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import routepaths from "@/libs/routepaths";
import React from "react";

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
const CreateWorkout = () => {
  return (
    <div>
      <BreadCrumb items={workoutCreatePageBreadcrumb} />
      CreateWorkout
    </div>
  );
};

export default CreateWorkout;
