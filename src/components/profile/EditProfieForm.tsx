import React, { FC, useLayoutEffect } from 'react'
import { useForm } from '@mantine/form'
import { Button, Fieldset, FileInput, NumberInput, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';

export interface IProfileFormValues {
    firstName: string;
    lastName: string;
    phone: string;
    email?: string;
    localtion?: string;
    dob: Date
    height: number;
    weight: number;
}

export interface IEditProfileProps {
    initialValues?: IProfileFormValues;
}
const EditProfieForm: FC<IEditProfileProps> = ({ initialValues }) => {
    const [profilePicture, setProfilePicture] = React.useState<File | null>(null);

    const editProfileForm = useForm<IProfileFormValues>({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: "",
            dob: new Date(),
            email: '',
            localtion: '',
            height: 0,
            weight: 0,
        }
    })


    const handleSubmit = editProfileForm.onSubmit(values => console.log({ values }))
    useLayoutEffect(() => {
        if (initialValues) {
            editProfileForm.setValues(initialValues);
            editProfileForm.resetDirty(initialValues);
        }
    }, [editProfileForm, initialValues])
    return (
        <div className=' w-full h-full space-y-2'>
            <Fieldset legend="Update Profile Picture">
                <FileInput label="select a picture" placeholder='click to upload' value={profilePicture} onChange={setProfilePicture} />
            </Fieldset>
            <Fieldset legend="Personal Information" >
                <TextInput label="First Name" placeholder="First Name" {...editProfileForm.getInputProps('firstName')} />
                <TextInput label="Last Name" placeholder="Last Name" {...editProfileForm.getInputProps('lastName')} />
                <TextInput label="Phone Number" placeholder="Enter your phone number" {...editProfileForm.getInputProps('phone')} />
                <TextInput label="Email" placeholder="Enter your email" {...editProfileForm.getInputProps('email')} />
                <TextInput label="Location" placeholder="Enter your location" {...editProfileForm.getInputProps('localtion')} />
                <DateInput label="Date of Birth" placeholder="Enter your date of birth" {...editProfileForm.getInputProps('dob')} />
            </Fieldset>
            <Fieldset legend="Health stats">
                <NumberInput label="Height" placeholder="Enter your height" allowNegative={false} {...editProfileForm.getInputProps('height')} />
                <NumberInput label="Weight" placeholder="Enter your weight" allowNegative={false} {...editProfileForm.getInputProps('weight')} />
            </Fieldset>
            <div className='flex flex-row items-center justify-start'>
                <Button className="mt-4" variant="filled" onClick={() => handleSubmit()} >
                    Update
                </Button>
            </div>
        </div>
    )
}

export default EditProfieForm