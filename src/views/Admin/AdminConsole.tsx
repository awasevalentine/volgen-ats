import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import EmptyCard from "../../components/EmptyCard/EmptyCard";
import ItemCard from "./ItemsCard";
import Grid from "../../components/Grid/Grid";
import CustomModal from "../../components/Modal/CustomModal";
import AddApplication from "./AddApplication";
import { useEffect, useState } from "react";
import ShareLink from "../../components/share/ShareLink";
import CustomButton from "../../components/Button/CustomButton";
import Signup from "./Auth/Signup";
import SignIn from "./Auth/SignIn";
import { RootState, useAppDispatch } from "../../lib/store";
import { logOut } from "../../lib/features/authSlice";
import useAuthHelper from "../../hooks/auth/authHelper";
import AdminAuthGuard from "../../hooks/AdminAuthGuard";
import { useFetchApplicationsQuery } from "../../lib/features/adminSlice";
import CustomSpinner from "../../components/Spinner/Spinner";
import { Box, styled, Typography } from "@mui/material";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

const AdminConsole = () => {
  const route = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [isOpenAuth, setIsOpenAuth] = useState(false);
  const [authOption, setAuthOption] = useState("signIn");
  const [isShareBtn, setIsShareBtn] = useState(false);
  const [link, setLink] = useState("");
  const dispatch = useAppDispatch();
  const { isAuthenticated, userDetails, isLoading } = useAuthHelper();
  const { isError, error, isFetching, data } = useFetchApplicationsQuery();
  const getProfile = useSelector((state: RootState) => state.auth.profile);


  const handleLogOut = () => {
    dispatch(logOut(""));
    route("/");
  };

  return (
    <AdminAuthGuard>
      <div className="w-full h-full">
        <div className="flex justify-end pt-4 sm:pt-6 pr-4 sm:pr-8">
          <div className="flex items-center gap-9">
            {!isLoading && (
              <div className="flex flex-row gap-1 items-center">
                <PersonIcon sx={{ fontSize: { xs: "20px", md: "25px" } }} />
                <span className="text-1xl capitalize font-semibold antialiased">
                  {getProfile?.first_name}
                </span>
              </div>
            )}
            {isAuthenticated() ? (
              <CustomButton btnTitle="Logout" onClick={() => handleLogOut()} />
            ) : (
              <CustomButton
                btnTitle="Login"
                onClick={() => setIsOpenAuth(true)}
              />
            )}
          </div>
        </div>
        <div
          className="mx-3 sm:mx-4 mb-1 border-b-[1.5px] pt-[2rem] 
                md:pt-[6rem] flex justify-center border-[#000]"
        >
          <span
            onClick={() => setOpen(true)}
            className="flex flex-row items-center gap-1 cursor-pointer hover:scale-110 font-semibold text-[18px]"
          >
            <FaPlus /> New Application
          </span>
        </div>
        <div className="p-[0px] md:p-[20px]">
          {data?.data?.applications.length === 0 ? (
            <div className="flex justify-center">
              <EmptyCard />
            </div>
          ) : (
            <>
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
                    <Grid>
                      {data?.data?.applications.map((res, index) => (
                        <ItemCard
                          setIsShareBtn={setIsShareBtn}
                          setLink={setLink}
                          item={res}
                          key={index}
                        />
                      ))}
                    </Grid>
                  )}
                </>
              )}
            </>
          )}
        </div>
        <CustomModal isOpen={isOpen} onCancel={setOpen}>
          <AddApplication setOpen={setOpen} />
        </CustomModal>
        <CustomModal isOpen={isOpenAuth} onCancel={setIsOpenAuth}>
          {authOption === "signIn" ? (
            <SignIn
              setIsOpenAuth={setIsOpenAuth}
              setAuthOption={setAuthOption}
            />
          ) : (
            <Signup
              setIsOpenAuth={setIsOpenAuth}
              setAuthOption={setAuthOption}
            />
          )}
        </CustomModal>
        <div className="w-full flex justify-center absolute top-[50%]">
          <div className="w-full lg:w-[50%]">
            {isShareBtn && <ShareLink setIsShare={setIsShareBtn} url={link} />}
          </div>
        </div>
      </div>
    </AdminAuthGuard>
  );
};

export default AdminConsole;

const PersonIcon = styled(IoPersonCircleSharp)(() => ({}));
