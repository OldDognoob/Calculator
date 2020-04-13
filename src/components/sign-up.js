import { connect } from "react-redux";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { addUser } from "../store/actions/index";
import PrivateRoute from "../utils/authRouter";
import axios from "axios";

const StyledForm = styled.div`
  margin-top: 8%;
  height: 80vh;
  color: #e76e3c;

  display: block;
  width: 80%;
  margin: 2rem auto;

  form {	    
    width: 70%;	    
    margin: 15% auto 2% auto;	    
    padding: 3rem 1rem;	      
    border-radius: 5rem;	     
    background-color: white;
    width: 70%;
    background-size: cover;
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -2;
      opacity: 0.4;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"] {
      border: 1px solid #e76e3c;
      width: 70%;
      display: block;
      margin: 1rem auto 2rem auto;
      padding: 0.5rem 0;
    }

    label {
      display: block;
      width: 80%;
      margin: 2rem auto;
    }

    button {
      width: 50%;
      padding: 1rem;
      background-color: #e76e3c;
      color: white;
      border: 1px solid #e76e3c;

      &:hover{
        background-color: white;
        border: 1px solid #e76e3c;
        color: #e76e3c;
      }
    }
  }

  p {
    color: black;
    background-color: white;
    width: 50%;
    margin: 0 auto;
    padding: 1rem;
  }

  a {
    color: #e76e3c;
    text-decoration: none;

    &: hover {
      text-decoration: underline;
    }
  }
`;

const initialUser = {
  // name: "",
  username: "",
  // email: "",
  password: "",
  // confirmPassword: ""
};

function SignUp(props) {
  const { addUser, validationSchema } = props;

  const handleSubmit = (values, formikBag) => {
    axios
      .post("https://backend-v1.herokuapp.com/api/users/register", {
        username: values.username,
        // creator: false,
        password: values.password,
        // name: values.name
      })
      .then((response) => {
        props.history.push("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialUser}
      onSubmit={handleSubmit}
      render={(props) => {
        return (
          <StyledForm>
            <Form>
              <h1>How To</h1>
              {/* <label>
                Name
                <Field name="name" type="text" />
                <ErrorMessage name="name" component="div" /> */}
              {/* </label> */}
              {/* <label> */}
              {/* Email
                <Field name="email" type="email" />
                <ErrorMessage name="email" component="div" />
              </label>  */}
              <label>
                Username
                <Field name="username" type="text" />
                <ErrorMessage name="username" component="div" />
              </label>
              <label>
                Password
                <Field name="password" type="password" />
                <ErrorMessage name="password" component="div" />
              </label>
              <button type="submit">Sign Up!</button>
            </Form>
            <p>
              Have an account? <Link to="/login">Log In</Link>{" "}
            </p>
          </StyledForm>
        );
      }}
    />
  );
}

const mapStateToProps = (state) => ({
  error: state.error,
  addUser: state.addUser,
  fetchingData: state.fetchingData,
});

export default connect(mapStateToProps, { addUser })(SignUp);
