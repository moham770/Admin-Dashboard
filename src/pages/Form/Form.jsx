import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import Header from './../../components/Header/Header';

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];
export default function Form() {
  const RegexPhone =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  function handleSubmit(values) {
    console.log(values);
    values.fristName = "";
    values.lastName = "";
    values.email = "";
    values.number = "";
    values.adress1 = "";
    values.adress2 = "";
    handleClick();
  }
  const validationSchema = yup.object({
    // @ts-ignore
    fristName: yup
      .string()
      .required("FristName Is Required")
      .min(3, "min length is 3")
      .max(7, "max length is 7"),
    // @ts-ignore
    lastName: yup
      .string()
      .required("FristName Is Required")
      .min(3, "min length is 3")
      .max(7, "max length is 7"),
    email: yup
      .string()
      .email("please Enter a Valid Email")
      .required("Email Is Required"),
    number: yup
      .string()
      .matches(RegexPhone, "Please Enter Abalid Number")
      .required("Number Is Required "),
    adress1: yup
      .string()
      .required("Adress1 Is Required")
      .min(3, "min length is 3")
      .max(100, "max length is 100"),
    adress2: yup
      .string()
      .required("Adress2 Is Required")
      .min(3, "min length is 3")
      .max(100, "max length is 100"),
    // @ts-ignore
    role: yup.string().required("Role Is Required "),
  });

  const formik = useFormik({
    initialValues: {
      fristName: "",
      lastName: "",
      email: "",
      number: "",
      adress1: "",
      adress2: "",
      role: "User",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });
  const handleRoleChange = (event) => {
    formik.setFieldValue("role", event.target.value); // Update the formik value for 'role'
  };

  const [open, setOpen] = useState(false);

  // @ts-ignore
  // @ts-ignore
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };

  return (
  <>
  <Header Title={'CREATE USER'} subTitle={'Create a New User Profile'} />
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      onSubmit={formik.handleSubmit}>
      <Stack direction="row" sx={{ gap: 2 }}>
        <TextField
          name="fristName"
          // @ts-ignore
          helperText={
            formik.errors.fristName && formik.touched.fristName
              ? formik.errors.fristName
              : ""
          }
          // @ts-ignore
          error={formik.errors.fristName && formik.touched.fristName}
          value={formik.values.fristName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{ flex: "1" }}
          label="Frist Name"
          variant="filled"
        />
        <TextField
          name="lastName"
          // @ts-ignore
          helperText={
            formik.errors.lastName && formik.touched.lastName
              ? formik.errors.lastName
              : ""
          }
          // @ts-ignore
          error={formik.errors.lastName && formik.touched.lastName}
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{ flex: "1" }}
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        name="email"
        // @ts-ignore
        helperText={
          formik.errors.email && formik.touched.email ? formik.errors.email : ""
        }
        // @ts-ignore
        error={formik.errors.email && formik.touched.email}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="Email"
        variant="filled"
      />


      <TextField
        name="number"
        // @ts-ignore
        helperText={
          formik.errors.number && formik.touched.number
            ? formik.errors.number
            : ""
        }
        // @ts-ignore
        error={formik.errors.number && formik.touched.number}
        value={formik.values.number}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="Contact Number"
        variant="filled"
      />

      
      <TextField
        name="adress1"
        // @ts-ignore
        helperText={
          formik.errors.adress1 && formik.touched.adress1
            ? formik.errors.adress1
            : ""
        }
        // @ts-ignore
        error={formik.errors.adress1 && formik.touched.adress1}
        value={formik.values.adress1}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="Adress1"
        variant="filled"
      />


      <TextField
        name="adress2"
        // @ts-ignore
        helperText={
          formik.errors.adress2 && formik.touched.adress2
            ? formik.errors.adress2
            : ""
        }
        // @ts-ignore
        error={formik.errors.adress2 && formik.touched.adress2}
        value={formik.values.adress2}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="Adress2"
        variant="filled"
      />


      <TextField
        name="role"
        // @ts-ignore
        helperText={
          formik.errors.role && formik.touched.role ? formik.errors.role : ""
        }
        // @ts-ignore
        error={formik.errors.role && formik.touched.role}
        variant="filled"
        select
        label="Role"
        value={formik.values.role} // Use formik.values.role as the value
        onChange={handleRoleChange} // Use handleRoleChange as the onChange event handler // Use formik.handleChange for updating formik values
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>




        <Box sx={{ textAlign: "right" }}>
        <Button
          disabled={!(formik.dirty && formik.isValid)}
          type="submit"
          variant="contained"
          sx={{ textTransform: "capitalize" }}>
          {" "}
          create new user
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}>
            Account Created Succefully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  </>
  );
}
