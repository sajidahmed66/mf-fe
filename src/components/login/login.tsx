import { FC } from "react";
import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { validatePassword, validatePhoneNumber } from "@/libs/validators";
import { axiosInstance } from "@/libs/utils/axiosInstance";
import { authenticate } from "@/libs/utils/auth/auth";
import { useNavigate } from "react-router-dom";
type loginTypes = {
  phone: string;
  password: string;
  termsOfService: boolean;
};

const LoginComponent: FC = () => {
  const naviagte = useNavigate();
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
    console.log(values);
    const getloginToken = (data: loginTypes) => {
      return axiosInstance.post("admin/auth", {
        phone: data.phone,
        password: data.password,
      });
    };
    try {
      let token = await getloginToken(values);
      console.log(token.data.token);
      authenticate(token.data.token, () => naviagte("/dashboard"));
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
