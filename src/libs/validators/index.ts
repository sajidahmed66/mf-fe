import * as yup from "yup";

export const validatePhoneNumber = (value: string) => {
  const phoneRegex = /^(?:\+?88)?01[3-9]\d{8}$/;
  const matcher = yup.string().matches(phoneRegex);
  return matcher.isValidSync(value);
};

export const validatePassword = (value: string) => {
  // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const matcher = yup.string().min(6).required("value cannot be empty");
  return matcher.isValidSync(value);
};

export const validateName = (value: string) => {
  const matcher = yup.string().min(3);
  return matcher.isValidSync(value);
};

export const validateNumber = (value: number) => {
  const matcher = yup.number().min(1);
  return matcher.isValidSync(value);
};

export const validatePackageType = (value: string) => {
  const matcher = yup.mixed().oneOf(["monthly", "package"]);
  return matcher.isValidSync(value);
};
