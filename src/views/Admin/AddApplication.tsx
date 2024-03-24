import { CircularProgress } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";



const AddApplication = ({setOpen}:{setOpen: (e: boolean)=>void}) => {
  const [isLodaing, setIsloading] = useState(false);
  const initialValues = {
    title: "",
    description: "",
  };

  const ValSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
  });

  const handleSubmit = (value, { resetForm }) => {
    console.log("the form data:::: ", value);
    setIsloading(true)
    resetForm();
  };

  return (
    <div className="flex flex-col gap-4 pt-6 pb-6 justify-center items-center">
      <h3 className="text-2xl font-bold text-[#0959AA]">Add new application</h3>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={ValSchema}
        onSubmit={handleSubmit}
      >
        {({ submitForm, resetForm }) => (
          <Form className="flex w-[95%] justify-center items-center flex-col gap-5">
            <div className="flex w-full flex-col">
              <label htmlFor="title" className="ml-1 font-[600]">
                Title<span className="text-red-900 pl-1">*</span>
              </label>
              <Field
                type="text"
                id="title"
                name="title"
                className="border-[1.5px] h-9 p-2 rounded-lg focus:outline-none"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-700"
              />
            </div>
            <div className="flex w-full flex-col">
              <label htmlFor="description" className="ml-1 font-[600]">
                Description<span className="text-red-900 pl-1">*</span>
              </label>
              <Field
                type="text"
                id="description"
                name="description"
                className="border-[1.5px] h-9 p-2 rounded-lg focus:outline-none"
              />
              <ErrorMessage
                name="description"
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddApplication;
