import { ErrorMessage, Field, Form, Formik } from "formik";
import HeaderText from "../../components/Header/Header";
import * as Yup from "yup";
import { CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CandidatePage = () => {
  const isLoading = false;
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const initialValues = {
    fullname: "",
    email: "",
    gender: "",
    country: "",
    resume: "",
    heardAboutUs: "",
  };

  useEffect(()=>{
    if(isError){
        toast.error("Unable to apply")
    }
    if(isSuccess){
        toast.success("Your application was submitted successfully")
    }
  },[isError, isSuccess])

  const ValSchema = Yup.object({
    fullname: Yup.string().required("Fullname is required"),
    email: Yup.string().required("Email is required"),
    gender: Yup.string().required("Gender is required"),
    resume: Yup.string().required("Resume is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
        if (key === 'resume' && values[key]) {
          formData.append(key, values[key][0]);
        } else {
          formData.append(key, values[key]);
        }
      });
    console.log("the form data:::: ", formData);
    // setIsSuccess(true);
    setIsError(true);
    resetForm();
  };

  return (
    <div className="w-full h-full flex flex-col gap-10 pt-[5rem]  items-center">
      <HeaderText title="Application Form" />
      <div className="w-[97%] md:w-[50%] py-10 flex flex-col justify-center">
        {isSuccess && (
          <div className="h-[50px] items-center">
            <Typography className="text-[#84cc16]">
              Application submitted successfully
            </Typography>
          </div>
        )}
        {isError && (
          <div className="h-[50px] items-center">
            <Typography className="text-[#b91c1c]">
              The following error
            </Typography>
          </div>
        )}
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={ValSchema}
          onSubmit={handleSubmit}
        >
          {({ submitForm, resetForm }) => (
            <Form className="flex w-[95%] justify-center items-center flex-col gap-5">
              <div className="flex w-full flex-col">
                <label htmlFor="fullname" className="ml-1 font-[600]">
                  Fullname<span className="text-red-900 pl-1">*</span>
                </label>
                <Field
                  type="text"
                  id="fullname"
                  name="fullname"
                  className="border-[1.5px] h-10 p-2 rounded-lg focus:outline-none"
                />
                <ErrorMessage
                  name="fullname"
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
                  className="border-[1.5px] h-10 p-2 rounded-lg focus:outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-700"
                />
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="gender" className="ml-1 font-[600]">
                  Gender
                  <span className="text-red-900 pl-1">*</span>
                </label>
                <Field
                  type="text"
                  id="gender"
                  name="gender"
                  as="select"
                  className="border-[1.5px] h-10 p-2 rounded-lg focus:outline-none"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="others">Others</option>
                </Field>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-red-700"
                />
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="country" className="ml-1 font-[600]">
                  Country
                </label>
                <Field
                  type="text"
                  id="country"
                  name="country"
                  className="border-[1.5px] h-10 p-2 rounded-lg focus:outline-none"
                />
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-red-700"
                />
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="heardAboutUs" className="ml-1 font-[600]">
                  Where you heard about us
                </label>
                <Field
                  type="text"
                  id="heardAboutUs"
                  name="heardAboutUs"
                  className="border-[1.5px] h-10 p-2 rounded-lg focus:outline-none"
                />
                <ErrorMessage
                  name="heardAboutUs"
                  component="div"
                  className="text-red-700"
                />
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="resume" className="ml-1 font-[600]">
                  Upload Resume<span className="text-red-900 pl-1">*</span>
                </label>
                <Field
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf"
                  placeHolder="Upload resume"
                  className="border-[1.5px] h-12 p-2 rounded-lg focus:outline-none"
                />
                <ErrorMessage
                  name="resume"
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
                      Apply ...
                    </div>
                  ) : (
                    <>Apply</>
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CandidatePage;
