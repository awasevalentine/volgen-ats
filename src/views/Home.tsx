import { Button, Typography } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const HomeView = () => {
    const route = useNavigate()
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-1/3 flex flex-col">
        <h2 className="text-3xl text-[#0959AA] mb-5 antialiased font-bold">Volgen</h2>
        <Typography className="antialiased text-[17px]">
            Volgen is a HR recruitment tool for collecting, managing and tracking candidate applications.
        </Typography>
        <div className="flex justify-center mt-4">
            <Button sx={{
                backgroundImage: 'linear-gradient(to bottom, #0A66C2, #064079)',
                outline: '1px solid #033363',
                color: '#F0F7FF',
                padding: '5px 10px',
                borderRadius: '50px',
                textTransform: 'capitalize',

                "&:hover": {
                    background: "#0A66C2",
                  },
            }}
            onClick={()=> route('applications')}
            >Get Started <FaArrowRightLong className="ml-2" /></Button>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
