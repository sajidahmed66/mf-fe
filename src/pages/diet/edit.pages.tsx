import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import routepaths from "@/libs/routepaths";
import { useParams } from "react-router-dom";
import { useGetDietByidQuery } from "@/features/diets/dietAPI";
import DietForm from "@/components/diet/DietForm";

const DietEditPageBreadcrumb = [
  {
    label: "Dashboard",
    link: routepaths.dashboard,
  },
  {
    label: "Diets",
    link: routepaths.diet,
  },
  {
    label: "Edit Package Details",
  },
];

//

const EditDietPage = () => {
  const { id } = useParams();

  const { data: dietData, isLoading, error } = useGetDietByidQuery(`${id}`);

  console.log(dietData, error);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error while loading Retry later</div>;
  if (!dietData) return <div>No data</div>;
  return (
    <div>
      <BreadCrumb items={DietEditPageBreadcrumb} />
      <div className="h-full w-full p-4 md:p-8">
        <DietForm initialvalues={dietData} edit={true} id={`${id}`} />
      </div>
    </div>
  );
};

export default EditDietPage;
