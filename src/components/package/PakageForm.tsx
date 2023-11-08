import { FC, useEffect } from "react";
import { Box, Button, Fieldset, LoadingOverlay, NumberInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IPackageData } from "@/libs/types";
import { validateName } from "@/libs/validators";
import { useCreatePackagesMutation, useUpdatePackageMutation } from "@/features/packages/packageAPI";
import * as _ from "lodash";
import { useDisclosure } from "@mantine/hooks";

export interface IPackageForm {
  name: string;
  amount: number;
  time_duration: number;
}

export interface IPackageFromProps {
  initialvalues?: Pick<IPackageData, "name" | "amount" | "time_duration">;
  edit: boolean;
  id?: string;
}

const PackageForm: FC<IPackageFromProps> = ({ initialvalues, edit, id }) => {
  const [visible, { toggle }] = useDisclosure(false);
  // create api query
  const [createPackage, { isLoading: isCLoading, isError: isCError, isSuccess: isCSuccess }] =
    useCreatePackagesMutation();

  console.log({ isCLoading, isCError, isCSuccess });
  // update api query
  const [updatePackage, { isLoading: isULoading, isError: isUError, isSuccess: isUSuccess }] =
    useUpdatePackageMutation();
  //
  console.log({ isUError, isULoading, isUSuccess });

  // form component
  const packageForm = useForm<IPackageForm>({
    initialValues: {
      name: "",
      amount: 0,
      time_duration: 0,
    },
    validate: {
      name: (value) => (validateName(value) ? null : "cannot be empty"),
    },
  });

  // component update
  useEffect(() => {
    if (initialvalues) {
      packageForm.setValues(initialvalues);
      packageForm.resetDirty(initialvalues); // TODO  do not know what it does need to figure out before i ship
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialvalues]);

  const handleSubmit = packageForm.onSubmit((values) => {
    if (id && id !== "") {
      // update package
      console.log("before");
      updatePackage({ id: id, data: _.pick(values, ["name", "amount", "time_duration"]) });
      console.log("after");
    } else {
      // create package
      createPackage(values);
    }
  });

  return (
    <Box mx="auto" miw={300} className="sm:space-y-4 md:space-y-6" pos="relative">
      <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
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
      <>
        {isCLoading || isULoading ? (
          <Button loading className="mt-4" variant="filled">
            {!edit ? "Create New" : "Update "} Package
          </Button>
        ) : (
          <Button className="mt-4" variant="filled" onClick={() => handleSubmit()}>
            {!edit ? "Create New" : "Update "} Package
          </Button>
        )}
      </>
    </Box>
  );
};

export default PackageForm;
