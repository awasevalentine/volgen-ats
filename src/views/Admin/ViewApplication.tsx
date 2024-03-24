import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { MdOutlineExpandMore } from "react-icons/md";
import dayjs from "dayjs";
import pdf from "../../assets/API Design Patterns.pdf";
import { applications } from "./constant/apllications";

const ViewApplication = () => {
  const routeParam = useParams();

  const foundApplication = applications.find(
    (res) => res?.id === Number(routeParam?.jobId)
  );

  const handleViewResume = (pdfPath: string) => {
    window.open(pdfPath, "_blank");
  };
  

  return (
    <div
      className="w-full h-full px-[10px] md:px-[4rem] lg:px-[6rem] pt-[3rem] mb-[2rem]
     md:pt-[3rem]"
    >
      <h2 className="text-2xl text-center text-[#0959AA] font-bold antialiased">
        View Application Responses
      </h2>
      <div className="pb-[2rem] flex justify-center">
        <Paper
          elevation={1}
          className="w-full md:w-[80%] h-full md:h-[450px] mt-[2rem] md:mt-[4rem] flex flex-col 
        md:flex-row"
          sx={{
            "&.MuiPaper-root": {
              borderRadius: "8px",
            },
          }}
        >
          <Box
            sx={{
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                width: "1px",
                height: "2px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "transparent",
                borderRadius: "20px",
                width: "1px",
                height: "1px",
              },
            }}
            className="w-[97%] md:w-[50%] mb-[20px] px-[13px] md:p-[20px]"
          >
            <div className="flex flex-col gap-0 pt-4 md:pt-[5px]">
              <h5 className="text-[20px] font-bold antialiased">
                {foundApplication?.title}
              </h5>
              <span className="flex opacity-60 italic">
                Posted{" "}
                {dayjs(foundApplication?.createdAt).format("DD, MMM. YYYY")}
              </span>
            </div>

            <Typography className="word-break pt-[1rem] md:pt-[1.5rem]">
              {foundApplication?.description}
            </Typography>
          </Box>
          <Box
            sx={{
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                width: "1px",
                height: "2px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "transparent",
                borderRadius: "20px",
                width: "1px",
                height: "1px",
              },
            }}
            className="w-[97%] md:w-[50%] mb-[20px]  px-[13px] md:py-[25px] md:px-[20px] h-full"
          >
            <h5 className="text-[20px] font-bold antialiased">
              Application Responses
            </h5>
            <div className="mt-[1.2rem] md:mt-[1.5rem]">
              {foundApplication?.responses?.length === 0 ? (
                <Typography
                  className="flex text-black justify-center border-dashed
                 h-[250px] w-[300px] border rounded-lg items-center"
                >
                  No Response yet!
                </Typography>
              ) : (
                <>
                  {foundApplication?.responses?.map((res) => (
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<MdOutlineExpandMore />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className="text-[16px] font-semibold"
                      >
                        {res?.fullname}
                      </AccordionSummary>
                      <AccordionDetails className="flex flex-col gap-3">
                        <InputText value={res?.email} readOnly />
                        <InputText value={res?.country} readOnly />
                        <InputText value={res?.gender} readOnly />
                        <InputText value={res?.hearAboutUs} readOnly />
                        <div className="flex flex-row justify-between my-4">
                          <Button
                            sx={{
                              backgroundImage:
                                "linear-gradient(to bottom, #0A66C2, #064079)",
                              outline: "1px solid #033363",
                              color: "#F0F7FF",
                              padding: "3px 10px",
                              borderRadius: "50px",
                              width: "150px",
                              textTransform: "capitalize",

                              "&:hover": {
                                transform: "scale(1.05)",
                              },
                            }}
                            // onClick={() => route("/")}
                          >
                            Download Resume
                          </Button>
                          <Button
                            sx={{
                              backgroundImage:
                                "linear-gradient(to bottom, #0A66C2, #064079)",
                              outline: "1px solid #033363",
                              color: "#F0F7FF",
                              padding: "3px 10px",
                              borderRadius: "50px",
                              width: "150px",
                              textTransform: "capitalize",

                              "&:hover": {
                                transform: "scale(1.05)",
                              },
                            }}
                            onClick={() => handleViewResume(pdf)}
                          >
                            View Resume
                          </Button>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </>
              )}
            </div>
          </Box>
        </Paper>
      </div>
    </div>
  );
};

export default ViewApplication;

const InputText = styled("input")(({ theme }) => ({
  borderRadius: "8px",
  // padding: '10px',
  width: "100%",
  height: "fit-content",
  padding: "10px 12px",
  fontSize: "13px",
  lineHeight: 1.42857,
  color: "#838383",
  backgroundColor: "#FFF",
  border: "1px solid #DADADA",
  boxShadow: "0px 2px 20px 0px rgba(80, 88, 159, 0.10)",
  transition:
    "border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",

  "&:focus": {
    outline: "none",
  },
}));
