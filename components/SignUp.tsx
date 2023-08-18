import React from "react";
import {
  Grid,
  Box,
  Image,
  Input,
  Button,
  Stack,
  FormControl,
  Text,
  FormLabel,
} from "@chakra-ui/react";
import { Formik } from "formik";
import SigninImg from "@/public/images/Signn.jpg";
import {
  GetSignInSchema,
  GetSignUpSchema,
} from "@/utils/validations/getEmailSchema";
import { singUp } from "@/services/api";

export const SignUp = () => {
  return (
    <Grid templateColumns="50% 50%">
      <Box boxShadow="md" p="6" rounded="md">
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            devto_username: "",
          }}
          onSubmit={(values) =>
            singUp(
              values.first_name,
              values.last_name,
              values.email,
              values.password,
              values.devto_username
            )
          }
          validationSchema={GetSignUpSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Stack
              spacing={{ base: 3, md: 6 }}
              direction="column"
              backgroundColor="#E5E5E5"
              borderRadius="10px"
              p={{ base: "2em 2em", md: "2em 4em" }}
              justifyContent="center"
              alignItems="center"
              id="join-waitlist"
            >
              <div>
                <h1>Welcome to Sign Up Page</h1>
              </div>
              <FormControl>
                <FormLabel display="flex" justifyContent="space-between">
                  {errors.first_name && touched.first_name && (
                    <Text variant="input-error-text">{errors.first_name}</Text>
                  )}
                </FormLabel>
                <Input
                  variant={"light-input"}
                  name="first_name"
                  type="first_name"
                  placeholder={"Enter Your First name"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first_name}
                />

                <FormLabel display="flex" justifyContent="space-between">
                  {errors.last_name && touched.last_name && (
                    <Text variant="input-error-text">{errors.last_name}</Text>
                  )}
                </FormLabel>
                <Input
                  variant={"light-input"}
                  name="last_name"
                  type="last_name"
                  placeholder={"Enter Your Last name"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.last_name}
                />

                <FormLabel display="flex" justifyContent="space-between">
                  {errors.email && touched.email && (
                    <Text variant="input-error-text">{errors.email}</Text>
                  )}
                </FormLabel>
                <Input
                  variant={"light-input"}
                  name="email"
                  type="email"
                  placeholder={"Enter Your Email Address"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />

                <FormLabel display="flex" justifyContent="space-between">
                  {errors.password && touched.password && (
                    <Text variant="input-error-text">{errors.password}</Text>
                  )}
                </FormLabel>
                <Input
                  variant={"light-input"}
                  name="password"
                  type="password"
                  placeholder={"Enter Your Password"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />

                <FormLabel display="flex" justifyContent="space-between">
                  {errors.devto_username && touched.devto_username && (
                    <Text variant="input-error-text">
                      {errors.devto_username}
                    </Text>
                  )}
                </FormLabel>
                <Input
                  variant={"light-input"}
                  name="devto_username"
                  type="devto_username"
                  placeholder={"Enter Your Dev Tool Username "}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.devto_username}
                />
              </FormControl>
              <Button
                variant="primary-button"
                width="100%"
                onClick={() => handleSubmit()}
              >
                <Text variant="primary-text">Sign Up</Text>
              </Button>
            </Stack>
          )}
        </Formik>
      </Box>
      <Box borderRadius="10px" overflow="hidden">
        {/* <Image alt="SignIn Image" src={SigninImg} width={300} height={300} /> */}
      </Box>
    </Grid>
  );
};
