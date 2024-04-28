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
import { useFetchApplicationQuery } from "../../lib/features/adminSlice";
import CustomSpinner from "../../components/Spinner/Spinner";
import useAuthHelper from "../../hooks/auth/authHelper";
import CandidatePage from "../CandidatePage/CandidatePage";

const ViewApplication = () => {
  const routeParam = useParams();
  const { isError, isFetching, error, data } = useFetchApplicationQuery(
    String(routeParam?.jobId)
  );

  const { isAuthenticated } = useAuthHelper();


  const handleViewResume = (pdfPath: string) => {
    window.open(pdfPath, "_blank");
  };
  

  return (
    <div
      className="w-full h-full px-[10px] md:px-[4rem] lg:px-[6rem] pt-[3rem] mb-[2rem]
     md:pt-[3rem]"
    >
      <h2 className="text-2xl text-center text-[#0959AA] font-bold antialiased">
        {!isAuthenticated()
          ? "View Application"
          : "View Application Responses"}
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
          {isFetching ? (
            <CustomSpinner />
          ) : (
            <>
              {isError ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: "50%",
                      height: "100%",
                      display: "flex",
                      gap: "7px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ color: "red", fontSize: "18px" }}>
                      An Error Occured
                    </Typography>
                  </Box>
                </Box>
              ) : (
                <>
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
                        {data?.data?.application?.title}
                      </h5>
                      <span className="flex opacity-60 italic">
                        Posted{" "}
                        {dayjs(data?.data?.application?.date_created).format(
                          "DD, MMM. YYYY"
                        )}
                      </span>
                    </div>

                    <Typography className="word-break pt-[1rem] md:pt-[1.5rem]">
                      {data?.data?.application?.description}
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
                    {!isAuthenticated() ? (
                      <CandidatePage applicationId={routeParam?.jobId} />
                    ) : (
                      <>
                        <h5 className="text-[20px] font-bold antialiased">
                          Application Responses
                        </h5>
                        <div className="mt-[1.2rem] md:mt-[1.5rem]">
                          {data?.data?.application?.submissions?.length === 0 ||
                          !data?.data?.application?.submissions ? (
                            <Typography
                              className="flex text-black justify-center border-dashed
                   h-[250px] w-[300px] border rounded-lg items-center"
                            >
                              No Applicant yet!
                            </Typography>
                          ) : (
                            <>
                              {data?.data?.application?.submissions?.map(
                                (res) => (
                                  <Accordion>
                                    <AccordionSummary
                                      expandIcon={<MdOutlineExpandMore />}
                                      aria-controls="panel1-content"
                                      id="panel1-header"
                                      className="text-[16px] font-semibold"
                                    >
                                      {res?.full_name}
                                    </AccordionSummary>
                                    <AccordionDetails className="flex flex-col gap-3">
                                      <InputText value={res?.email} readOnly />
                                      <InputText
                                        value={res?.country}
                                        readOnly
                                      />
                                      <InputText value={res?.gender} readOnly />
                                      <InputText
                                        value={res?.referral_source}
                                        readOnly
                                      />
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
                                          onClick={() => handleViewResume(res?.resume)}

                                        >
                                          Download Resume
                                        </Button>
                                        {/* <Button
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
                                          onClick={() => handleViewResume(res?.resume)}
                                        >
                                          View Resume
                                        </Button> */}
                                      </div>
                                    </AccordionDetails>
                                  </Accordion>
                                )
                              )}
                            </>
                          )}
                        </div>
                      </>
                    )}
                  </Box>
                </>
              )}
            </>
          )}
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
