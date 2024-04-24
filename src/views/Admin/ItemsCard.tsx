import { Button, Tooltip, Typography, useMediaQuery } from "@mui/material";
import Card from "../../components/Card/Card";
import { IApplication } from "../../interface/application.interface";
import { shortenStr } from "../../util/stringLength";
import { IoEyeOutline } from "react-icons/io5";
import { IoTrash } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { useDeleteApplicationsMutation } from "../../lib/features/adminSlice";
import { toast } from "react-toastify";
import CustomSpinner from "../../components/Spinner/Spinner";
import CustomModal from "../../components/Modal/CustomModal";
import AddApplication from "./AddApplication";

type Props = {
  item: IApplication;
  setLink: (e: string) => void;
  setIsShareBtn: (e: boolean) => void;
};

const ItemCard = ({ item, setLink, setIsShareBtn }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const mediaMatches = useMediaQuery("(max-width:410px)");
  const router = useNavigate();
  const [deleteItem, { isLoading }] = useDeleteApplicationsMutation();

  const handleCopy = useCallback(() => {
    const fullPath = window.location.origin + `/view-detail/${item?.id}`;
    setLink(fullPath);
    setIsShareBtn(true);
  }, []);

  const handleDelete = () => {
    deleteItem(item?.id)
      .unwrap()
      .then((res) => {
        toast.success(res?.message);
      })
      .catch((error) => {
        toast.error(error?.data?.error);
      });
  };

  return (
    <Card>
      {isLoading ? (
        <CustomSpinner />
      ) : (
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
              <div className="flex flex-row gap-3">
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
                  </div>
                </Tooltip>
                <Tooltip title="Edit Application">
                  <div
                    className="flex flex-row cursor-pointer hover:scale-110 gap-1 items-center 
                            text-[16px] antialiased font-semibold"
                    onClick={() => setOpen(true)}
                  >
                    <MdEdit color="linear-gradient(to bottom, #0A66C2, #064079)" />
                  </div>
                </Tooltip>
                <Tooltip title="Delete Application">
                  <div
                    className="flex flex-row cursor-pointer hover:scale-110 gap-1 items-center 
                            text-[16px] antialiased font-semibold"
                    onClick={() => handleDelete()}
                  >
                    <IoTrash color="red" />
                  </div>
                </Tooltip>
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
                  onClick={() => handleCopy()}
                >
                  Share Link
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <CustomModal isOpen={isOpen} onCancel={setOpen}>
        <AddApplication setOpen={setOpen} editData={item} />
      </CustomModal>
    </Card>
  );
};

export default ItemCard;
