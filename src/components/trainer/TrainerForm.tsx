import NotificationAlert from "@/components/common/notification";
import { useCreateTrainerMutation } from "@/features/trainer/trainerAPI";
import {
  createErrorNotificationDetails,
  createSuccessNotificationDetails,
} from "@/libs/constants/toast-notificaton";
import { ITrainerForm } from "@/libs/types";
import { validateName, validateNumber } from "@/libs/validators";
import { Box, Button, Fieldset, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FC } from "react";

const TrainerForm: FC = () => {
  const [createTrainer, { isLoading: isCLoading, isError: isCError, isSuccess: isCSuccess }] =
    useCreateTrainerMutation();

  const createTrainerForm = useForm<ITrainerForm>({
    initialValues: {
      firstname: "",
      lastname: "",
      phone: +880,
      // nid: ""
    },
    validate: {
      firstname: (value) => (validateName(value) ? null : "cannot be empty"),
      lastname: (value) => (validateName(value) ? null : "cannot be empty"),
      phone: (value) => (validateNumber(value) ? null : "cannot be empty"),
    },
  });

  const handleSubmit = createTrainerForm.onSubmit((values) => {
    createTrainer(values);
    createTrainerForm.reset();
  });

  return (
    <>
      {" "}
      <Box className="my-4">
        {isCSuccess && <NotificationAlert {...createSuccessNotificationDetails} />}
        {isCError && <NotificationAlert {...createErrorNotificationDetails} />}
      </Box>
      <Box mx="auto" miw={320}>
        <Fieldset legend="Member information">
          <TextInput
            label="First Name"
            placeholder="First Name"
            {...createTrainerForm.getInputProps("firstname")}
          />
          <TextInput
            label="Last Name"
            placeholder="Last Name"
            {...createTrainerForm.getInputProps("lastname")}
          />
          <TextInput
            label="Phone Number"
            placeholder="Enter your phone number"
            {...createTrainerForm.getInputProps("phone")}
          />
        </Fieldset>
        {/* <Fieldset legend="Biometrics">
                <TextInput label="NID Number" placeholder="Enter  Nid number" {...createTraineeForm.getInputProps('nid')} />
                <FileInput
                    label="Upload NID COPY"
                    description="Must include both side in one page converted to pdf format"
                    placeholder="Click to upload file"
                    value={value} onChange={setValue}
                />
            </Fieldset> */}
        <Button className="mt-4" variant="filled" onClick={() => handleSubmit()}>
          Create New Trainer
        </Button>
      </Box>
    </>
  );
};

export default TrainerForm;
