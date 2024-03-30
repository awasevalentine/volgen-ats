import { Button } from "@mui/material";

type IProps = {
  btnTitle: string;
  onClick: () => void;
};

const CustomButton: React.FC<IProps> = ({ btnTitle, onClick }) => {
  return (
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
      onClick={onClick}
    >
      {btnTitle}
    </Button>
  );
};

export default CustomButton;
