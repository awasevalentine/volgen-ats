import { Typography } from "@mui/material";

const EmptyCard = () => {
    return ( 
        <div className="w-[97%] md:w-[450px] h-[180px]
        flex justify-center items-center
        border-dashed border border-black rounded-lg"
        >
            <Typography className="text-[17px] opacity-70">No record!</Typography>
        </div>
     );
}
 
export default EmptyCard;