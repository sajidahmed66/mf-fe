import * as yup from "yup";

export const validatePhoneNumber = (value: string) => {
  const phoneRegex = /^(?:\+?88)?01[3-9]\d{8}$/;
  let matcher = yup.string().matches(phoneRegex);
  return matcher.isValidSync(value);
};

export const validatePassword = (value: string) => {
  // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  let matcher = yup.string().min(6);
  return matcher.isValidSync(value);
};
