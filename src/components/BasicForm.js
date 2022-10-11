import React from "react";
import { Box, Button, TextField, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  firstName: yup.string("Enter your First Name").required("Email is required"),
  lastName: yup.string("Enter your password").required("Password is required"),
  email: yup
    .string("Enter your Email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const BasicForm = ({ addItem }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      addItem(values);
      resetForm();
    },
  });

  return (
    <Box textAlign="center">
      <h1>Add List</h1>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: "flex" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                id="firstName"
                name="firstName"
                label="First Name"
                variant="outlined"
                size="small"
                fullWidth
                sx={{ marginRight: 2 }}
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="lastName"
                name="lastName"
                label="Last Name"
                variant="outlined"
                size="small"
                fullWidth
                sx={{ marginRight: 2 }}
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                size="small"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            type="submit"
            sx={{ marginLeft: 2, alignSelf: "flex-start" }}
          >
            ADD
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default BasicForm;
