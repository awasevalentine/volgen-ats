import { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import {
  LinkedinShareButton,
  FacebookShareButton,
  EmailShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinIcon,
  FacebookIcon,
  EmailIcon,
  InstapaperShareButton,
  TwitterShareButton,
  TwitterIcon,
  InstapaperIcon,
} from "react-share";
import { GrFormClose } from "react-icons/gr";
import { IoMdCopy } from "react-icons/io";

const ShareLink = ({
  url,
  setIsShare,
}: {
  url: string;
  setIsShare: (e: boolean) => void;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        backgroundImage: "linear-gradient(180deg, #CEE5FD, #FFF)",
        justifyContent: "center",
        alignItems: "center",
        height: "120px",
        width: "100%",
        borderRadius: "12px",
        padding: "0px 13px",
        // background
        overflowX: "scroll",
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
    >
      <div
        className="absolute right-[26%] top-1 cursor-pointer shadow-xl 
            font-bold flex items-center"
        onClick={() => setIsShare(false)}
      >
        <GrFormClose size={20} fontWeight={700} />
      </div>
      <div className="w-full flex flex-row gap-6 justify-center">
        <WhatsappShareButton url={url}>
          <WhatsappIcon round size={30} />
        </WhatsappShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon round size={30} />
        </LinkedinShareButton>
        <FacebookShareButton url={url}>
          <FacebookIcon round size={30} />
        </FacebookShareButton>
        <EmailShareButton url={url}>
          <EmailIcon round size={30} />
        </EmailShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon round size={30} />
        </TwitterShareButton>
        <InstapaperShareButton url={url}>
          <InstapaperIcon round size={30} />
        </InstapaperShareButton>

        <Box className="flex flex-col">
          <IoMdCopy className="cursor-pointer" onClick={handleCopy} size={30} />
          {copied && <Typography sx={{ fontSize: "12px" }}>Copied!</Typography>}
        </Box>
      </div>
    </Paper>
  );
};

export default ShareLink;
