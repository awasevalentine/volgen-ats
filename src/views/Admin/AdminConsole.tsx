import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import EmptyCard from "../../components/EmptyCard/EmptyCard";
import ItemCard from "./ItemsCard";
import Grid from "../../components/Grid/Grid";
import { applications } from "./constant/apllications";
import CustomModal from "../../components/Modal/CustomModal";
import AddApplication from "./AddApplication";
import { useState } from "react";
import ShareLink from "../../components/share/ShareLink";
import CustomButton from "../../components/Button/CustomButton";
import Signup from "./Auth/Signup";
import SignIn from "./Auth/SignIn";

const AdminConsole = () => {
  const route = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [isOpenAuth, setIsOpenAuth] = useState(false);
  const [authOption, setAuthOption] = useState("signIn");
  const [isShareBtn, setIsShareBtn] = useState(false);
  const [link, setLink] = useState("");

  const isAuthenticated = false;

  return (
    <div className="w-full h-full">
      <div className="flex justify-end pt-4 sm:pt-6 pr-4 sm:pr-8">
        {isAuthenticated ? (
          <CustomButton btnTitle="Logout" onClick={() => route("/")} />
        ) : (
          <CustomButton btnTitle="Login" onClick={() => setIsOpenAuth(true)} />
        )}
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
        {applications.length === 0 ? (
          <div className="flex justify-center">
            <EmptyCard />
          </div>
        ) : (
          <Grid>
            {applications.map((res, index) => (
              <ItemCard
                setIsShareBtn={setIsShareBtn}
                setLink={setLink}
                item={res}
                key={index}
              />
            ))}
          </Grid>
        )}
      </div>
      <CustomModal isOpen={isOpen} onCancel={setOpen}>
        <AddApplication setOpen={setOpen} />
      </CustomModal>
      <CustomModal isOpen={isOpenAuth} onCancel={setOpen}>
        {
            authOption === "signIn" ? (
            <SignIn setIsOpenAuth={setIsOpenAuth} setAuthOption={setAuthOption} />
            ):(
            <Signup setIsOpenAuth={setIsOpenAuth} setAuthOption={setAuthOption} />
            )
        }
      </CustomModal>
      <div className="w-full flex justify-center absolute top-[50%]">
        <div className="w-full lg:w-[50%]">
          {isShareBtn && <ShareLink setIsShare={setIsShareBtn} url={link} />}
        </div>
      </div>
    </div>
  );
};

export default AdminConsole;
