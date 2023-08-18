import React from "react";
import { Grid, Box, Image, Input, Button, Stack, FormControl, Text, FormLabel } from "@chakra-ui/react";
import { Formik } from "formik";
import SigninImg from "@/public/images/Signn.jpg";
import { GetSignInSchema } from "@/utils/validations/getEmailSchema";
import { singIn } from "@/services/api";

export const SignIn = () => {
  return (
    <Grid templateColumns="60% 40%">
      <Box boxShadow="md" p="6" rounded="md">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => singIn(values.email, values.password)}
          validationSchema={GetSignInSchema}
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
                <h1>Welcome to Sign In Page</h1>
              </div>
              <FormControl>
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
              </FormControl>
              <Button
                variant="primary-button"
                width="100%"
                onClick={() => handleSubmit()}
              >
                <Text variant="primary-text">Sign In</Text>
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