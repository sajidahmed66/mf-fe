import TraineeForm from "@/components/trainee/TraineeForm";
import { useGetPackagesQuery } from "@/features/packages/packageAPI";

const AddTrainee = () => {
  const { data: packageData } = useGetPackagesQuery();

  return (
    <div className="h-full w-full p-4 md:p-8">
      <TraineeForm packageList={packageData} />
    </div>
  );
};

export default AddTrainee;
