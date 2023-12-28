import NotificationAlert from "@/components/common/notification";
import { useCreateExerciseMutation, useUpdateExerciseMutation } from "@/features/exercies/exerciesAPI";
import {
  createErrorNotificationDetails,
  createSuccessNotificationDetails,
  updateErrorNotificationDetails,
  updateSuccessNotificationDtails,
} from "@/libs/constants/toast-notificaton";
import { IWorkoutFormProps } from "@/libs/types";
import { validateName } from "@/libs/validators";
import { Box, Button, Fieldset, LoadingOverlay, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import _ from "lodash";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IWorkoutForm {
  name: string;
  description: string;
}

const WorkoutForm: FC<IWorkoutFormProps> = ({ edit, id, initialvalues }) => {
  const [createWorkout, { isLoading: isCLoading, isError: isCError, isSuccess: isCSuccess }] =
    useCreateExerciseMutation();
  const [updateWorkout, { isLoading: isULoading, isError: isUError, isSuccess: isUSuccess }] =
    useUpdateExerciseMutation();
  const navigate = useNavigate();
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

  useEffect(() => {
    if (initialvalues) {
      workoutForm.setValues(initialvalues);
      workoutForm.resetDirty(initialvalues);
    }
  }, [initialvalues]);

  const handleSubmit = workoutForm.onSubmit((values) => {
    if (id && id !== "") {
      updateWorkout({ id: id, data: _.pick(values, ["name", "description"]) });
      workoutForm.resetDirty(values);
    } else {
      createWorkout(values);
      workoutForm.reset();
    }
    // workoutForm.
    // navigate("/workout");
  });

  return (
    <>
      <Box className="my-4">
        {isCSuccess && <NotificationAlert {...createSuccessNotificationDetails} />}
        {isUSuccess && <NotificationAlert {...updateSuccessNotificationDtails} />}
        {isUError && <NotificationAlert {...updateErrorNotificationDetails} />}
        {isCError && <NotificationAlert {...createErrorNotificationDetails} />}
      </Box>
      <Box mx={"auto"} miw={300} className="sm:space-y-4 md:space-y-6" pos={"relative"}>
        <LoadingOverlay
          visible={isCLoading || isULoading}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
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
          {isCLoading || isULoading ? (
            <Button loading className="mt-4" variant="filled">
              {!edit ? "Create New" : "Update "} Workout
            </Button>
          ) : (
            <Button className="mt-4" variant="filled" onClick={() => handleSubmit()}>
              {!edit ? "Create New" : "Update "} Workout
            </Button>
          )}
        </>
      </Box>
    </>
  );
};

export default WorkoutForm;
