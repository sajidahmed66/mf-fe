import React, { useLayoutEffect } from "react";
import { useForm } from "@mantine/form";
import { Box, NumberInput, TextInput, Fieldset, Radio, Group, Button } from "@mantine/core";
import { validateName } from "@/libs/validators";
import { IPackageData } from "@/libs/types";
interface ICreateTraineeFormValues {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  registrationFee: number;
  subscriptionType: string;
  subscriptionPackageID?: string;
  monthlyFee: number;
  totalAmount: number;
  paidAmount: number;
}

interface ITraineeForm {
  initialValues?: ICreateTraineeFormValues | undefined
  packageList?: IPackageData[]
}

const TraineeForm: React.FC<ITraineeForm> = ({ initialValues, packageList }) => {
  const createTraineeForm = useForm<ICreateTraineeFormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      mobileNumber: '',
      monthlyFee: 0,
      registrationFee: 0,
      paidAmount: 0,
      subscriptionType: '',
      totalAmount: 0,
      subscriptionPackageID: ''
    },

    validate: {
      firstName: (value) => validateName(value) ? null : "name must"
    }
  });

  const handleSubmit = createTraineeForm.onSubmit(values => console.log(values));
  console.log(createTraineeForm.values.subscriptionType)
  useLayoutEffect(() => {
    if (initialValues) {
      createTraineeForm.setValues(initialValues)
      createTraineeForm.resetDirty(initialValues) // iTODO  do not know what it does need to figure out before i ship
    }
  }, [initialValues, createTraineeForm]);

  const renderPackagelist = (packageList: IPackageData[],) => {
    const availablePackagelist = <Radio.Group
      label="select a package type"
      withAsterisk
      {...createTraineeForm.getInputProps("subscriptionType")}>
      <Group mt="xs">
        {packageList.map(p => (
          <Radio value={p._id} label={p.name} />
        ))}
      </Group>
    </Radio.Group>
    return availablePackagelist
  }

  return (
    <Box mx='auto' miw={300} className="sm:space-y-4 md:space-y-6" >
      <Fieldset legend="Member information">
        <TextInput label="First Name" placeholder="First Name" {...createTraineeForm.getInputProps('firstName')} />
        <TextInput label="Last Name" placeholder="Last Name" {...createTraineeForm.getInputProps('lastName')} />
        <TextInput label="Phone Number" placeholder="Enter your phone number" {...createTraineeForm.getInputProps('mobileNumber')} />
      </Fieldset>

      <Fieldset legend="Registration details" >
        <NumberInput label="Registration Fee" allowNegative={false} allowDecimal={false} placeholder="Registration fee" min={0} {...createTraineeForm.getInputProps("registrationFee")} />
        <Radio.Group
          label="Choose Subscription type"
          withAsterisk
          {...createTraineeForm.getInputProps("subscriptionType")}
        >
          <Group mt="xs">
            <Radio value="monthly" label="Monthly" />
            <Radio value="package" label="Package" />
          </Group>
        </Radio.Group>
        {packageList && createTraineeForm.values.subscriptionType === "package" ? renderPackagelist(packageList) : null}
      </Fieldset>

      <Fieldset legend="Payment Details" >
        <NumberInput label="Total Amount" allowNegative={false} allowDecimal={false} placeholder="Registration fee" min={0} {...createTraineeForm.getInputProps("totalAmount")} />
        <NumberInput label="Paid Amount" allowNegative={false} allowDecimal={false} placeholder="Registration fee" min={0} {...createTraineeForm.getInputProps("paidAmount")} />
      </Fieldset>
      <Button className="mt-4" variant="filled" onClick={() => handleSubmit()} >
        Create New Member
      </Button>
    </Box>
  );
};

export default TraineeForm;