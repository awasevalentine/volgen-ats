import { Button, Typography } from "@mui/material";
import Card from "../../components/Card/Card";
import { IApplication } from "../../interface/application.interface";
import { shortenStr } from "../../util/stringLength";
import { IoEyeOutline } from "react-icons/io5";

type Props = {
  item: IApplication;
};

const ItemCard = ({ item }: Props) => {
  return (
    <Card>
      <div className="flex flex-col h-full">
        <div className="flex justify-end">
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
          >
            View
          </Button>
        </div>
        <div>
          <h5 className="text-[20px] mt-1 mb-3 break-words antialiased font-bold">
            {shortenStr(item?.title, 20)}
          </h5>
          <Typography>{shortenStr(item?.description, 250)}</Typography>
        </div>
        <div className="flex footer-wrapper items-end h-full w-full">
          <div className="foot-section flex flex-row justify-between w-full">
            <div
              className="flex flex-row cursor-pointer hover:scale-110 gap-1 items-center 
                    text-[16px] antialiased font-semibold"
            >
              <IoEyeOutline />
              <span>{item?.responses?.length}</span>
            </div>
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
