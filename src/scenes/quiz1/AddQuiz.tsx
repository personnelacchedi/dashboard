import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";

import Header from "../../components/Header";

const schema = yup.object().shape({
  question: yup.string().required("Question is required"),
  answer1: yup.string().required("Answer 1 is required"),
  answer2: yup.string().required("Answer 2 is required"),
  answer3: yup.string().required("Answer 3 is required"),
  answer4: yup.string().required("Answer 4 is required"),
});

interface FormValues {
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
}

const initialValues: FormValues = {
  question: "",
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
};

const MyForm: React.FC = () => {
  
  
  const handleFormSubmit = (values: FormValues) => {
    console.log(values);
    // Add your submission logic here
  };

  return (
    <Box
      m="20px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Header title="Add QUIZ" subtitle=" FORM " />
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <form onSubmit={handleSubmit} style={{ width: "300px" }}>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              label="Question"
              name="question"
              value={values.question}
              onChange={handleChange}
              error={touched.question && !!errors.question}
              helperText={touched.question && errors.question}
            />
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              label="Answer 1"
              name="answer1"
              value={values.answer1}
              onChange={handleChange}
              error={touched.answer1 && !!errors.answer1}
              helperText={touched.answer1 && errors.answer1}
            />
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              label="Answer 2"
              name="answer2"
              value={values.answer2}
              onChange={handleChange}
              error={touched.answer2 && !!errors.answer2}
              helperText={touched.answer2 && errors.answer2}
            />
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              label="Answer 3"
              name="answer3"
              value={values.answer3}
              onChange={handleChange}
              error={touched.answer3 && !!errors.answer3}
              helperText={touched.answer3 && errors.answer3}
            />
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              label="Answer 4"
              name="answer4"
              value={values.answer4}
              onChange={handleChange}
              error={touched.answer4 && !!errors.answer4}
              helperText={touched.answer4 && errors.answer4}
            />
            <form action="" id="f1">
                <h3>Select the correct answer </h3>
                <input type="radio" id="1" name="ans" value="ans1" />
                <label htmlFor="admin">answer 1</label> <br />
                <input type="radio" id="2" name="ans" value="ans2" />
                <label htmlFor="admin">answer 2</label> <br />
                <input type="radio" id="3" name="ans" value="ans3" />
                <label htmlFor="admin">answer 3</label> <br />
                <input type="radio" id="4" name="ans" value="ans4" />
                <label htmlFor="admin">answer </label> <br />
              </form>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "20px" }}
            >
              Submit
            </Button>
          </form>
          
        )}
      </Formik>
    </Box>
  );
};

export default MyForm;
