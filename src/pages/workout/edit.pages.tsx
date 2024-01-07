import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import routepaths from "@/libs/routepaths";
import { useParams } from "react-router-dom";
import { useGetExerciesByIdQuery } from "@/features/exercies/exerciesAPI";
import WorkoutForm from "@/components/workout/WorkoutForm";

const WorkoutEditPageBreadcrumb = [
  {
    label: "Dashboard",
    link: routepaths.dashboard,
  },
  {
    label: "Workouts",
    link: routepaths.workout,
  },
  {
    label: "Edit Workout Details",
  },
];

//

const EditWorkoutPage = () => {
  const { id } = useParams();

  const { data: workoutData, isLoading, error } = useGetExerciesByIdQuery(`${id}`);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error while loading Retry later</div>;
  if (!workoutData) return <div>No data</div>;
  return (
    <div>
      <BreadCrumb items={WorkoutEditPageBreadcrumb} />
      <div className="h-full w-full p-4 md:p-8">
        <WorkoutForm initialvalues={workoutData} edit={true} id={`${id}`} />
      </div>
    </div>
  );
};

export default EditWorkoutPage;
