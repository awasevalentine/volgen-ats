import { CircularProgress, IconButton, InputAdornment } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import HeaderText from "../../../components/Header/Header";
import * as Yup from "yup";
import { useState } from "react";

const Signup = ({
  setIsOpenAuth,
  setAuthOption,
}: {
  setIsOpenAuth: (e: boolean) => void;
  setAuthOption: (e: string) => void;
}) => {
  const [isLodaing, setIsloading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    password: "",
    cPassword: "",
  };

  const ValSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
    cPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const handleSubmit = (value, { resetForm }) => {
    console.log("the form data:::: ", value);
    setIsOpenAuth(false);
    setIsloading(true);
    resetForm();
  };

  return (
    <div className="flex flex-col gap-4 pt-6 pb-6 justify-center items-center">
      <HeaderText title="Admin Signup" />
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={ValSchema}
        onSubmit={handleSubmit}
      >
        {({ submitForm, resetForm }) => (
          <Form className="flex w-[95%] justify-center items-center flex-col gap-5">
            <div className="flex w-full flex-col">
              <label htmlFor="name" className="ml-1 font-[600]">
                Name<span className="text-red-900 pl-1">*</span>
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="border-[1.5px] h-9 p-2 rounded-lg focus:outline-none"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-700"
              />
            </div>
            <div className="flex w-full flex-col">
              <label htmlFor="email" className="ml-1 font-[600]">
                Email<span className="text-red-900 pl-1">*</span>
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="border-[1.5px] h-9 p-2 rounded-lg focus:outline-none"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-700"
              />
            </div>
            <div className="flex w-full flex-col">
              <label htmlFor="password" className="ml-1 font-[600]">
                Password<span className="text-red-900 pl-1">*</span>
              </label>
              <Field
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="border-[1.5px] h-9 p-2 rounded-lg focus:outline-none"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                      aria-label="toggle password visibility"
                    >
                      {showPassword ? "Me" : "You"}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-700"
              />
            </div>
            <div className="flex w-full flex-col">
              <label htmlFor="cPassword" className="ml-1 font-[600]">
                Confirm Password<span className="text-red-900 pl-1">*</span>
              </label>
              <Field
                type="password"
                id="cPassword"
                name="cPassword"
                className="border-[1.5px] h-9 p-2 rounded-lg focus:outline-none"
              />
              <ErrorMessage
                name="cPassword"
                component="div"
                className="text-red-700"
              />
            </div>

            <div className="flex flex-row gap-5">
              <button
                className="bg-[#0959AA] py-[5px] px-[20px] text-white rounded"
                type="submit"
              >
                {isLodaing ? (
                  <div className="flex items-center gap-2">
                    <CircularProgress disableShrink size={20} />
                    Submit ...
                  </div>
                ) : (
                  <>Submit</>
                )}
              </button>
            </div>
            <div className="">
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => setAuthOption("signIn")}
                  className="text-blue-600 cursor-pointer"
                >
                  Sign in
                </span>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
