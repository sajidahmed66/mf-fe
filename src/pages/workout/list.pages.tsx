import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import routepaths from "@/libs/routepaths";
import React from "react";


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


const WorkoutList = () => {
  return <div>
    <BreadCrumb items={workoutListPageBreadcrumb} />
    WorkoutList</div>;
};

export default WorkoutList;
