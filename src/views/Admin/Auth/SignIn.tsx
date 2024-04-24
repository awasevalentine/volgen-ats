import { CircularProgress, IconButton, InputAdornment } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import HeaderText from "../../../components/Header/Header";
import * as Yup from "yup";
import { useState } from "react";
import { useLoginMutation } from "../../../lib/features/authApiSlice";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../../lib/store";
import { setProfileDetails, setToken } from "../../../lib/features/authSlice";
import { useNavigate } from "react-router-dom";

const SignIn = ({
  setIsOpenAuth,
  setAuthOption,
  fromHome
}: {
  setIsOpenAuth: (e: boolean) => void;
  setAuthOption: (e: string) => void;
  fromHome?: boolean
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, {isLoading}] = useLoginMutation()
  const dispatch = useAppDispatch()
  const initialValues = {
    email: "",
    password: "",
  };

  const route = useNavigate()

  const ValSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (value, { resetForm }) => {
    login(value).unwrap().then((res)=>{
      toast.success(res?.message)
      dispatch(setToken(res?.data?.access_token))
      dispatch(setProfileDetails(res?.data?.profile))
      setIsOpenAuth(false);
      resetForm();
      if(fromHome) route("/applications") 
    }).catch((error)=>{
      toast.error(error?.data?.error)
    })
  };

  return (
    <div className="flex flex-col gap-4 pt-6 pb-6 justify-center items-center">
      <HeaderText title="Admin SignIn" />
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={ValSchema}
        onSubmit={handleSubmit}
      >
        {({ submitForm, resetForm }) => (
          <Form className="flex w-[95%] justify-center items-center flex-col gap-5">
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
                      {showPassword ? "EyeOpen" : "EyeClose"}
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
            <div className="flex flex-row gap-5">
              <button
                className="bg-[#0959AA] py-[5px] px-[20px] text-white rounded"
                type="submit"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <CircularProgress disableShrink size={20} />
                    Login ...
                  </div>
                ) : (
                  <>Login</>
                )}
              </button>
            </div>
            <p>
              Don't have an account?{" "}
              <span
                onClick={() => setAuthOption("signUp")}
                className="text-blue-600 cursor-pointer"
              >
                Sign up
              </span>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
