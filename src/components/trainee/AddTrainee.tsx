import TraineeForm from "@/components/trainee/TraineeForm";

const AddTrainee = () => {
  return (
    <div className="h-full w-full p-4 md:p-8">
      <TraineeForm edit={false} />
    </div>
  );
};

export default AddTrainee;
