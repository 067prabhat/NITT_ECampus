import React from "react";
import Slider from "react-slick";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Login Details:", values);
    alert("Login Successful!");
  };

  // Slider settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="login-page">
      <div className="slideshow-container">
        <Slider {...sliderSettings}>
          <div>
            <img src="/images/1578909622phpo6Horh.jpeg" alt="Slide 1" className="slide-image" />
          </div>
          <div>
            <img src="/images/1578909697phpgVXpri.jpeg" alt="Slide 2" className="slide-image" />
          </div>
          <div>
            <img src="/images/Octa-Lab2.JPG" alt="Slide 3" className="slide-image" />
          </div>
        </Slider>
      </div>

      <div className="form-container">
        <h2>Login</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {() => (
            <Form className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage name="password" component="div" className="error" />
              </div>

              <button type="submit" className="submit-button">Login</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
