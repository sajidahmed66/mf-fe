import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import routepaths from "@/libs/routepaths";
import { FC } from "react";

const workoutRequestPageBreadcrumb = [
  {
    label: "Dashboard",
    link: routepaths.dashboard,
  },
  {
    label: "Workout List",
    link: routepaths.workout,
  },
  {
    label: "Workout Requests",
    // link: routepaths.workout_request,
  },
];

const WorkoutPlanRequests: FC = () => {
  return (
    <div>
      <BreadCrumb items={workoutRequestPageBreadcrumb} />
      WorkoutPlanRequests s
    </div>
  );
};

export default WorkoutPlanRequests;
