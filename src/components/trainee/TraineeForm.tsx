import React, { useLayoutEffect } from "react";
import { useForm } from "@mantine/form";
import { Box, NumberInput, TextInput, Fieldset, Radio, Group, Button } from "@mantine/core";
interface ICreateTraineeForm {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  registrationFee: number;
  subscriptionType: string;
  monthlyFee: number;
  totalAmount: number;
  paidAmount: number;
}

interface ITraineeForm {
  initialValues?: ICreateTraineeForm | undefined
}

const TraineeForm: React.FC<ITraineeForm> = ({ initialValues }) => {
  const createTraineeForm = useForm<ICreateTraineeForm>({
    initialValues: {
      firstName: '',
      lastName: '',
      mobileNumber: '',
      monthlyFee: 0,
      registrationFee: 0,
      paidAmount: 0,
      subscriptionType: '',
      totalAmount: 0
    },
  });

  const handleSubmit = createTraineeForm.onSubmit(values => console.log({ values }))
  useLayoutEffect(() => {
    if (initialValues) {
      createTraineeForm.setValues(initialValues)
      createTraineeForm.resetDirty(initialValues) // iTODO  do not know what it does need to figure out before i ship
    }
  }, [initialValues, createTraineeForm])
  return (
    <Box mx='auto' maw={320} >
      <Fieldset legend="Member information">
        <TextInput label="First Name" placeholder="First Name" {...createTraineeForm.getInputProps('firstName')} />
        <TextInput label="Last Name" placeholder="Last Name" {...createTraineeForm.getInputProps('lastName')} />
        <TextInput label="Phone Number" placeholder="Enter your phone number" {...createTraineeForm.getInputProps('mobileNumber')} />
      </Fieldset>
      <Fieldset legend="Registration details" >

        <NumberInput label="Registration Fee" allowNegative={false} allowDecimal={false} placeholder="Registration fee" min={0} {...createTraineeForm.getInputProps("registrationFee")} />
        <Radio.Group
          name="favoriteFramework"
          label="Choose Subscription type"
          withAsterisk
          {...createTraineeForm.getInputProps("subscriptionType")}
        >
          <Group mt="xs">
            <Radio value="monthly" label="Monthly" />
            <Radio value="package" label="Package" />
          </Group>
        </Radio.Group>
      </Fieldset>
      <Fieldset legend="Payment Details" >
        <NumberInput label="Total Amount" allowNegative={false} allowDecimal={false} placeholder="Registration fee" min={0} {...createTraineeForm.getInputProps("totalAmount")} />
        <NumberInput label="Paid Amount" allowNegative={false} allowDecimal={false} placeholder="Registration fee" min={0} {...createTraineeForm.getInputProps("paidAmount")} />
      </Fieldset>
      <Button variant="filled" onClick={() => handleSubmit()} >
        Create New Member
      </Button>
    </Box>
  );
};

export default TraineeForm;
