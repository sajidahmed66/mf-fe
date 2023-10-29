import { FC, useCallback, useEffect, useState } from "react";
import { TextInput, Checkbox, Button, Group, Box, Alert } from "@mantine/core";
import { useForm } from "@mantine/form";
import { validatePassword, validatePhoneNumber } from "@/libs/validators";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/features/auth/authApi";
import { IconAlertTriangle } from "@tabler/icons-react";

type loginTypes = {
  phone: string;
  password: string;
  termsOfService: boolean;
};

const LoginComponent: FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [login, { data, error: responseError, isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const iconError = <IconAlertTriangle size={16} />;

  const loginForm = useForm({
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

  const handleSubmit = useCallback((values: loginTypes) => {
    try {
      login({
        phone: values.phone,
        password: values.password,
      });
    } catch (error) {
      console.log({ error });
    }
  }, []);

  useEffect(() => {
    if (responseError) {
      if ("status" in responseError) {
        const errorMessage =
          "error" in responseError ? responseError.error : JSON.stringify(responseError.data);
        setError(errorMessage);
      }
    }
    if (data?.token) {
      navigate("/dashboard");
    }
  }, [data, responseError]);

  return (
    <Box className="m-auto w-full max-w-sm">
      {/* TODO need to do error handeling for wrong credentials */}
      {error && (
        <Alert variant="light" color="red" title="Error" icon={iconError}>
          {error}
        </Alert>
      )}
      <form onSubmit={loginForm.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          type="number"
          withAsterisk
          label="Phone"
          placeholder="01**********"
          {...loginForm.getInputProps("phone")}
        />
        <TextInput withAsterisk label="Password" hidden {...loginForm.getInputProps("password")} />
        <Checkbox
          mt="md"
          label="I agree to terms and conditions"
          {...loginForm.getInputProps("termsOfService", { type: "checkbox" })}
        />
        <Group justify="flex-end" mt="md">
          {isLoading ? <Button loading>Logging in ... </Button> : <Button type="submit">Login</Button>}
        </Group>
      </form>
    </Box>
  );
};

export default LoginComponent;
