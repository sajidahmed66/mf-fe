import { IPackageData } from "@/libs/types";
import { Box, Button, Fieldset, NumberInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FC, useLayoutEffect } from "react";

export interface IPackageForm {
  name: string;
  amount: number;
  time_duration: number;
}

interface IPackageFormProps {
  initialValues?: IPackageData;
}

const PakageForm: FC<IPackageFormProps> = ({ initialValues }) => {
  const packageForm = useForm<IPackageForm>({
    initialValues: {
      name: "",
      amount: 0,
      time_duration: 0,
    },
    // validate: {
    //     name:
    // }
  });

  const handleSubmit = packageForm.onSubmit((values) => console.log(values));

  useLayoutEffect(() => {
    if (initialValues) {
      packageForm.setValues(initialValues);
      packageForm.resetDirty(initialValues); // TODO  do not know what it does need to figure out before i ship
    }
  }, [initialValues, packageForm]);

  return (
    <Box mx="auto" miw={300} className="sm:space-y-4 md:space-y-6">
      <Fieldset legend="Package details">
        <TextInput
          label="Package Name"
          placeholder="Enter Package Name"
          {...packageForm.getInputProps("name")}
        />
        <NumberInput label="Amount" placeholder="Amout" {...packageForm.getInputProps("amount")} />
        <NumberInput
          label="Duration"
          placeholder="Enter in days"
          {...packageForm.getInputProps("time_duration")}
        />
      </Fieldset>
      <Button className="mt-4" variant="filled" onClick={() => handleSubmit()}>
        Create New Package
      </Button>
    </Box>
  );
};

export default PakageForm;
