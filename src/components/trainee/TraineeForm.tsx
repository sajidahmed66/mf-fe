import React, { useLayoutEffect } from "react";
import { UseFormReturnType, useForm } from "@mantine/form";
import { Box, NumberInput, TextInput, Fieldset, Radio, Group, Button } from "@mantine/core";
import { validateName } from "@/libs/validators";
import { IPackageData } from "@/libs/types";
import { useGetPackagesQuery } from "@/features/packages/packageAPI";
import { useCreateTraineeMutation } from "@/features/trainee/traineeAPI";

export interface ICreateTraineeFormValues {
  firstname: string;
  lastname: string;
  phone: string;
  registrationAmount: number;
  subscriptionType: "1" | "2" | 1 | 2;
  packageType?: string; // this option only pops up if the subscription type is package
  totalAmount: number;
  paidAmount: number;
  subscriptionAmount?: number;
  // paidAmount
}

export interface ITraineeFormProps {
  initialValues?: ICreateTraineeFormValues;
  edit: boolean;
  id?: string;
}

const TraineeForm: React.FC<ITraineeFormProps> = ({ initialValues, edit, id }) => {
  const { data: packageList, isError: isPackageError, error: packageError } = useGetPackagesQuery();
  const [createTrainee, result] = useCreateTraineeMutation();
  console.log(result);
  const createTraineeForm = useForm<ICreateTraineeFormValues>({
    initialValues: {
      firstname: "",
      lastname: "",
      phone: "",
      registrationAmount: 0,
      paidAmount: 0,
      subscriptionType: "1",
      totalAmount: 0,
      packageType: "",
      subscriptionAmount: 0,
    },

    validate: {
      firstname: (value) => (validateName(value) ? null : "name must"),
    },
  });

  //
  const handleSubmit = createTraineeForm.onSubmit((values) => {
    console.log(values);
    const transFormedRequestData: Partial<ICreateTraineeFormValues> = {
      firstname: values.firstname,
      lastname: values.lastname,
      phone: values.phone,
      subscriptionType: values.subscriptionType === "1" ? 1 : 2,
      packageType: values.subscriptionType === "2" && values.packageType ? values.packageType : "",
      paidAmount: values.paidAmount,
      registrationAmount: values.registrationAmount,
      totalAmount: values.totalAmount,
      subscriptionAmount: values.subscriptionAmount,
    };
    console.log(transFormedRequestData);
    if (!edit) {
      createTrainee(transFormedRequestData);
    }
  });

  useLayoutEffect(() => {
    if (initialValues) {
      createTraineeForm.setValues(initialValues);
      createTraineeForm.resetDirty(initialValues); // TODO  do not know what it does need to figure out before i ship
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues]);

  // renders package data after selecting package option
  const renderPackagelist = (
    packageList: IPackageData[],
    form: UseFormReturnType<
      ICreateTraineeFormValues,
      (values: ICreateTraineeFormValues) => ICreateTraineeFormValues
    >,
  ) => {
    const availablePackagelist = (
      <Radio.Group label="select a package type" withAsterisk {...form.getInputProps("packageType")}>
        <Group mt="xs">
          {packageList.map((p) => (
            <Radio value={p._id} label={p.name} />
          ))}
        </Group>
      </Radio.Group>
    );
    return availablePackagelist;
  };
  return (
    <Box mx="auto" miw={300} className="sm:space-y-4 md:space-y-6">
      {/* genaral info */}
      <Fieldset legend="Member information">
        <TextInput
          label="First Name"
          placeholder="First Name"
          {...createTraineeForm.getInputProps("firstname")}
        />
        <TextInput
          label="Last Name"
          placeholder="Last Name"
          {...createTraineeForm.getInputProps("lastname")}
        />
        <TextInput
          label="Phone Number"
          placeholder="Enter your phone number"
          {...createTraineeForm.getInputProps("phone")}
        />
      </Fieldset>

      <Fieldset legend="Registration details">
        <NumberInput
          label="Registration Fee"
          allowNegative={false}
          allowDecimal={false}
          placeholder="Registration fee"
          min={0}
          {...createTraineeForm.getInputProps("registrationAmount")}
        />
        <Radio.Group
          label="Choose Subscription type"
          withAsterisk
          {...createTraineeForm.getInputProps("subscriptionType")}
        >
          <Group mt="xs">
            <Radio value={"1"} label="Monthly" />
            <Radio value={"2"} label="Package" />
          </Group>
        </Radio.Group>
        {/* todo */}
        <div className="py-2">
          {packageList && createTraineeForm.values.subscriptionType === "2"
            ? renderPackagelist(packageList, createTraineeForm)
            : null}
        </div>
      </Fieldset>

      <Fieldset legend="Payment Details">
        <NumberInput
          label="Total Amount"
          allowNegative={false}
          allowDecimal={false}
          placeholder="Registration fee"
          min={0}
          {...createTraineeForm.getInputProps("totalAmount")}
        />
        <NumberInput
          label="Paid Amount"
          allowNegative={false}
          allowDecimal={false}
          placeholder="Registration fee"
          min={0}
          {...createTraineeForm.getInputProps("paidAmount")}
        />
      </Fieldset>

      <Button className="mt-4" variant="filled" onClick={() => handleSubmit()}>
        {edit ? "Update " : "Create New Member"}
      </Button>
    </Box>
  );
};

export default TraineeForm;
