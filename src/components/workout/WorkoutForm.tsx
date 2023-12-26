import NotificationAlert from "@/components/common/notification";
import { useCreateExerciseMutation, useUpdateExerciseMutation } from "@/features/exercies/exerciesAPI";
import {
  createSuccessNotificationDetails,
  updateErrorNotificationDetails,
} from "@/libs/constants/toast-notificaton";
import { validateName } from "@/libs/validators";
import { Box, Button, Fieldset, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";

interface IWorkoutForm {
  name: string;
  description: string;
}
const WorkoutForm = () => {
  const [createWorkout, { isLoading: isCLoading, isError: isCError, isSuccess: isCSuccess }] =
    useCreateExerciseMutation();
  // const [updateWorkout,{}]=useUpdateExerciseMutation()
  const workoutForm = useForm<IWorkoutForm>({
    initialValues: {
      name: "",
      description: "",
    },
    validate: {
      name: (value) => (validateName(value) ? null : "cannot be empty"),
      // description:(value) =>()
    },
  });

  const handleSubmit = workoutForm.onSubmit((values) => {
    createWorkout(values);
  });
  return (
    <>
      <Box>
        {isCSuccess && <NotificationAlert {...createSuccessNotificationDetails} />}
        {isCError && <NotificationAlert {...updateErrorNotificationDetails} />}
      </Box>
      <Box>
        <Fieldset legend="Workout Details">
          <TextInput
            label="Workout Name"
            placeholder="Enter Workout Name"
            {...workoutForm.getInputProps("name")}
          />
          <Textarea
            label="Workout Description"
            placeholder="Enter Workout Description"
            {...workoutForm.getInputProps("description")}
          />
        </Fieldset>
        <>
          {isCLoading ? (
            <Button loading className="mt-4" variant="filled">
              Create New Workout
            </Button>
          ) : (
            <Button className="mt-4" variant="filled" onClick={() => handleSubmit()}>
              Create New Workout
            </Button>
          )}
        </>
      </Box>
    </>
  );
};

export default WorkoutForm;
