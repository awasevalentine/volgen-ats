import { Button } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import EmptyCard from "../../components/EmptyCard/EmptyCard";
import ItemCard from "./ItemsCard";
import Grid from "../../components/Grid/Grid";

const applications = [
  {
    title: "Javascript Developer",
    description:
      "This position is for a javascript developer with over 10years of experience, This position is for a javascript developer with over 10years of experience, This position is for a javascript developer with over 10years of experience, This position is for a javascript developer with over 10years of experience, This position is for a javascript developer with over 10years of experience, This position is for a javascript developer with over 10years of experience, This position is for a javascript developer with over 10years of experience, This position is for a javascript developer with over 10years of experience, This position is for a javascript developer with over 10years of experience, This position is for a javascript developer with over 10years of experience, This position is for a javascript developer with over 10years of experience, This position is for a javascript developer with over 10years of experience, This position is for a javascript developer with over 10years of experience, This position is for a javascript developer with over 10years of experience This position is for a javascript developer with over 10years of experience This position is for a javascript developer with over 10years of experience This position is for a javascript developer with over 10years of experience This position is for a javascript developer with over 10years of experience This position is for a javascript developer with over 10years of experience This position is for a javascript developer with over 10years of experience This position is for a javascript developer with over 10years of experience This position is for a javascript developer with over 10years of experience This position is for a javascript developer with over 10years of experience This position is for a javascript developer with over 10years of experience This position is for a javascript developer with over 10years of experience This position is for a javascript developer with over 10years of experience This position is for a javascript developer with over 10years of experience This position is for a javascript developer with over 10years of experience This position is for a javascript developer with over 10years of experience This position is for a javascript developer with over 10years of experience This position is for a javascript developer with over 10years of experience This position is for a javascript developer with over 10years of experience This position is for a javascript developer with over 10years of experience",
    createdAt: new Date(),
    responses: [1, 2, 3, 4]
  },
  {
    title: "React Developer",
    description:
      "This position is for a React developer with over 10years of experience",
    createdAt: new Date(),
    responses: [1, 2]

  },
  {
    title: "Data Analyst",
    description:
      "This position is for a Data analyst with over 2years of experience",
    createdAt: new Date(),
    responses: []
  },
];
const AdminConsole = () => {
  const route = useNavigate();

  return (
    <div className="w-full h-full">
      <div className="flex justify-end pt-4 sm:pt-6 pr-4 sm:pr-8">
        <Button
          sx={{
            backgroundImage: "linear-gradient(to bottom, #0A66C2, #064079)",
            outline: "1px solid #033363",
            color: "#F0F7FF",
            padding: "3px 20px",
            borderRadius: "50px",
            textTransform: "capitalize",

            "&:hover": {
                background: "#0A66C2",
              },
          }}
          onClick={() => route("/")}
        >
          Logout
        </Button>
      </div>
      <div
        className="mx-3 sm:mx-4 mb-1 border-b-[1.5px] pt-[2rem] 
                md:pt-[6rem] flex justify-center border-[#000]"
      >
        <span className="flex flex-row items-center gap-1 cursor-pointer hover:scale-110 font-semibold text-[18px]">
          <FaPlus /> New Application
        </span>
      </div>
      <div className="p-[10px] md:p-[20px]">
        {applications.length === 0 ? (
          <div className="flex justify-center">
            <EmptyCard />
          </div>
        ) : (
          <Grid>
            {applications.map((res, index) => (
              <ItemCard item={res} key={index} />
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
};

export default AdminConsole;
