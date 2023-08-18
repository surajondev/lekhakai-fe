import * as Yup from "yup";

export const GetEmailSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is Required")
    .email("Must be a valid email"),
});

export const GetSignInSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is Required")
    .email("Must be a valid email"),
  password: Yup.string().required("Password is required").min(6, "<password>"),
});

export const GetSignUpSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is Required"),
  last_name: Yup.string().required("First Name is Required"),
  email: Yup.string()
    .required("Email is Required")
    .email("Must be a valid email"),
  password: Yup.string().required("Password is required").min(6, "<password>"),
  devto_username: Yup.string(),
});
