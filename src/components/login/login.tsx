import { FC } from "react";
import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { validatePassword, validatePhoneNumber } from "@/libs/validators";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/features/auth/authApi";
type loginTypes = {
  phone: string;
  password: string;
  termsOfService: boolean;
};

const LoginComponent: FC = () => {
  const naviagte = useNavigate();
  const [login] = useLoginMutation();
  const form = useForm({
    initialValues: {
      phone: "",
      password: "",
      termsOfService: false,
    },

    validate: {
      phone: (value) => (validatePhoneNumber(`+88${value}`) ? null : "invalid phone number"),
      password: (value) => (validatePassword(value) ? null : "Password must be at least 6 characters"),
      termsOfService: (value) => (value ? null : "You must accept T&Cs"),
    },
  });

  const handleSubmit = async (values: loginTypes) => {
    try {
      login({
        phone: values.phone,
        password: values.password,
      });
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <Box className="w-full max-w-sm m-auto">
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          type="number"
          withAsterisk
          label="Phone"
          placeholder="01**********"
          {...form.getInputProps("phone")}
        />
        <TextInput withAsterisk label="Password" hidden {...form.getInputProps("password")} />
        <Checkbox
          mt="md"
          label="I agree to terms and conditions"
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
        />
        <Group justify="flex-end" mt="md">
          <Button type="submit">Login</Button>
        </Group>
      </form>
    </Box>
  );
};

export default LoginComponent;
