import { Box, Button, Fieldset, FileInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import React, { useLayoutEffect, useState } from 'react'

interface ICreateTraineFormValues {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    nid?: string;

}

export interface ITrainerFormProps {
    initalValues?: ICreateTraineFormValues | undefined;
}

const TrainerForm: React.FC<ITrainerFormProps> = ({ initalValues }) => {
    const [value, setValue] = useState<File | null>(null);
    const createTraineeForm = useForm<ICreateTraineFormValues>({
        initialValues: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            nid: ""
        }
    })

    const handleSubmit = createTraineeForm.onSubmit(values => console.log(values));

    useLayoutEffect(() => {
        if (initalValues) {
            createTraineeForm.setValues(initalValues)
        }
    }, [initalValues, createTraineeForm])
    return (
        <Box mx='auto' miw={320}>
            <Fieldset legend="Member information">
                <TextInput label="First Name" placeholder="First Name" {...createTraineeForm.getInputProps('firstName')} />
                <TextInput label="Last Name" placeholder="Last Name" {...createTraineeForm.getInputProps('lastName')} />
                <TextInput label="Phone Number" placeholder="Enter your phone number" {...createTraineeForm.getInputProps('mobileNumber')} />
            </Fieldset>
            <Fieldset legend="Biometrics">
                <TextInput label="NID Number" placeholder="Enter  Nid number" {...createTraineeForm.getInputProps('nid')} />
                <FileInput
                    label="Upload NID COPY"
                    description="Must include both side in one page converted to pdf format"
                    placeholder="Click to upload file"
                    value={value} onChange={setValue}
                />
            </Fieldset>
            <Button className="mt-4" variant="filled" onClick={() => handleSubmit()} >
                Create New Trainer
            </Button>
        </Box>
    );
}

export default TrainerForm
