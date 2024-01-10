import { FC, useEffect } from "react";
import { Box, Button, Fieldset, LoadingOverlay, NumberInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IDietForm, IDietFormProps } from "@/libs/types";
import { validateName, validateNumber, validateUnit } from "@/libs/validators";
import _ from "lodash";
import NotificationAlert from "@/components/common/notification";
import {
  createSuccessDietNotificationDetails,
  updateSuccessDietNotificationDetails,
  updateErrorDietNotificationDetails,
  createErrorDietNotificationDetails,
} from "@/libs/constants/toast-notificaton";
import { useCreateDietMutation, useUpdateDietMutation } from "@/features/diets/dietAPI";
import { useNavigate } from "react-router-dom";

const DietForm: FC<IDietFormProps> = ({ initialvalues, edit, id }) => {
  // create api query
  const [createDiet, { isLoading: isCLoading, isError: isCError, isSuccess: isCSuccess }] =
    useCreateDietMutation();

  // update api query
  const [updateDiet, { isLoading: isULoading, isError: isUError, isSuccess: isUSuccess }] =
    useUpdateDietMutation();
  const navigate = useNavigate();

  // form component
  const dietForm = useForm<IDietForm>({
    initialValues: {
      name: "",
      quantity: 0,
      unit: "",
      calorie: 0,
    },
    validate: {
      // TODO need to add valodation
      name: (value) => (validateName(value) ? null : "cannot be empty"),
      quantity: (value: number) => (validateNumber(value) ? null : "cannot be empty"),
      unit: (value: string) => (validateUnit(value) ? null : "cannot be empty"),
    },
  });

  // component update
  useEffect(() => {
    if (initialvalues) {
      dietForm.setValues(initialvalues);
      dietForm.resetDirty(initialvalues); // TODO  do not know what it does need to figure out before i ship
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialvalues]);

  const handleSubmit = dietForm.onSubmit(async (values) => {
    if (id && id !== "") {
      // update Diet
      await updateDiet({ id: id, data: _.pick(values, ["name", "quantity", "unit", "calorie"]) });
      await navigateDietList();
    } else {
      // create Diet
      await createDiet(values);
      dietForm.reset();
    }
  });

  const navigateDietList = async () => {
    setTimeout(() => {
      navigate("/diet");
    }, 1500);
  };

  return (
    <>
      <Box className="my-4">
        {isCSuccess && <NotificationAlert {...createSuccessDietNotificationDetails} />}
        {isUSuccess && <NotificationAlert {...updateSuccessDietNotificationDetails} />}
        {isUError && <NotificationAlert {...updateErrorDietNotificationDetails} />}
        {isCError && <NotificationAlert {...createErrorDietNotificationDetails} />}
      </Box>
      <Box mx="auto" miw={300} className="sm:space-y-4 md:space-y-6" pos="relative">
        <LoadingOverlay visible={isULoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
        <Fieldset legend="Diet details">
          <TextInput label="Diet Name" placeholder="Enter Diet Name" {...dietForm.getInputProps("name")} />

          <NumberInput label="Quantity" placeholder="Quantity" {...dietForm.getInputProps("quantity")} />

          <TextInput label="Unit" placeholder="Enter unit " {...dietForm.getInputProps("unit")} />
          <NumberInput label="Calorie" placeholder="Enter Calorie " {...dietForm.getInputProps("calorie")} />
        </Fieldset>
        <>
          {isCLoading || isULoading ? (
            <Button loading className="mt-4" variant="filled">
              {!edit ? "Create New" : "Update "} Diet
            </Button>
          ) : (
            <Button className="mt-4" variant="filled" onClick={() => handleSubmit()}>
              {!edit ? "Create New" : "Update "} Diet
            </Button>
          )}
        </>
      </Box>
    </>
  );
};

export default DietForm;