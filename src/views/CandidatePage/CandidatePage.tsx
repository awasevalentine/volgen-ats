import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Box, CircularProgress, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { useCandidateApplicationsMutation } from "../../lib/features/adminSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  applicationId?: string;
}

const CandidatePage = ({ applicationId }: IProps) => {
  const [
    candidateApplications,
    { isLoading, isSuccess, isError },
  ] = useCandidateApplicationsMutation();
  const navigate = useNavigate()

  const initialValues = {
    full_name: "",
    email: "",
    gender: "",
    country: "",
    resume: "",
    referral_source: "",
  };

  const ValSchema = Yup.object({
    full_name: Yup.string().required("Fullname is required"),
    email: Yup.string().required("Email is required"),
    gender: Yup.string().required("Gender is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
    candidateApplications({ applicationId, payload: formData })
      .unwrap()
      .then((res) => {
        resetForm();
        toast.success(res.message);
        // setTimeout(()=>{
          navigate('/')
        // }, 5000)

      })
      .catch((error) => {
        toast.error(error?.data?.error);
      });
  };


  return (
    <div className="w-full h-full flex flex-col gap-10">
      <h5 className="text-[20px] font-bold antialiased">Application Form</h5>
      <div className="w-[97%] pb-5 flex flex-col justify-center">
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
          {({ submitForm, resetForm, setFieldValue }) => (
            <Form className="flex w-[95%] justify-center flex-col gap-5">
              <div className="flex w-full flex-col">
                <label htmlFor="full_name" className="ml-1 font-[600]">
                  Fullname<span className="text-red-900 pl-1">*</span>
                </label>
                <Field
                  type="text"
                  id="full_name"
                  name="full_name"
                  className="border-[1.5px] h-10 p-2 rounded-lg focus:outline-none"
                />
                <ErrorMessage
                  name="full_name"
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
                <label htmlFor="referral_source" className="ml-1 font-[600]">
                  Where you heard about us
                </label>
                <Field
                  type="text"
                  id="referral_source"
                  name="referral_source"
                  className="border-[1.5px] h-10 p-2 rounded-lg focus:outline-none"
                />
                <ErrorMessage
                  name="referral_source"
                  component="div"
                  className="text-red-700"
                />
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="resume" className="ml-1 font-[600]">
                  Upload Resume<span className="text-red-900 pl-1">*</span>
                </label>
                <Box className="border-[1.5px] h-[50px] p-2 rounded-lg focus:outline-none">
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    onChange={(event) => {
                      setFieldValue("resume", event.currentTarget.files[0]);
                    }}
                  />
                </Box>
                <ErrorMessage
                  name="resume"
                  component="div"
                  className="text-red-700"
                />
              </div>

              <div className="flex flex-row justify-start gap-5">
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
