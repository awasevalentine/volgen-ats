import { Button, Tooltip, Typography, useMediaQuery } from "@mui/material";
import Card from "../../components/Card/Card";
import { IApplication } from "../../interface/application.interface";
import { shortenStr } from "../../util/stringLength";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type Props = {
  item: IApplication;
};

const ItemCard = ({ item }: Props) => {
  const mediaMatches = useMediaQuery("(max-width:410px)");
  const router = useNavigate();

  const handleCopy = () => {
    const fullPath = window.location.origin + `/view-detail/${item?.id}`;

    navigator.clipboard
      .writeText(fullPath)
      .then(() => {
        console.log("Path copied successfully:", fullPath);
        toast.success("Application link copied");
      })
      .catch((err) => {
        console.error("Failed to copy path:", err);
      });
  };

  return (
    <Card>
      <div className="flex flex-col h-full">
        {/* <div className="flex justify-end">
          <Button
            size="small"
            sx={{
              backgroundImage: "linear-gradient(to bottom, #0A66C2, #064079)",
              outline: "1px solid #033363",
              color: "#F0F7FF",
              padding: "0px",
              borderRadius: "50px",
              textTransform: "capitalize",

              "&:hover": {
                background: "#0A66C2",
              },
            }}
            className=""
            onClick={()=>router(`/view-detail/${item?.title}`, {state: item})}
          >
            View
          </Button>
        </div> */}
        <div>
          <h5 className="text-[20px] mt-1 mb-3 break-words antialiased font-bold">
            {shortenStr(item?.title, 20)}
          </h5>
          {mediaMatches ? (
            <Typography>{shortenStr(item?.description, 180)}</Typography>
          ) : (
            <Typography>{shortenStr(item?.description, 250)}</Typography>
          )}
        </div>
        <div className="flex footer-wrapper items-end h-full w-full">
          <div className="foot-section flex flex-row justify-between w-full">
          <Tooltip title="View Applicants">
            
            <div
              className="flex flex-row cursor-pointer hover:scale-110 gap-1 items-center 
                    text-[16px] antialiased font-semibold"
              onClick={() =>
                router(`/view-detail/${item?.id}`, { state: item })
              }
            >
              <IoEyeOutline />
              <span>{item?.responses?.length}</span>
                {/* <IconButton>
    <DeleteIcon />
  </IconButton> */}
              {/* <IoEyeOutline />
              <span>{item?.responses?.length}</span> */}
            </div>
            </Tooltip>

            <div>
              <Button
                size="small"
                sx={{
                  backgroundImage:
                    "linear-gradient(to bottom, #0A66C2, #064079)",
                  outline: "1px solid #033363",
                  color: "#F0F7FF",
                  padding: "3px 10px",
                  borderRadius: "4px",
                  textTransform: "capitalize",

                  "&:hover": {
                    background: "#0A66C2",
                  },
                }}
                className=""
                onClick={() => handleCopy()}
              >
                Share Link
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ItemCard;
