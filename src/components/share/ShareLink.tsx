import { Box, Paper } from '@mui/material';
import {LinkedinShareButton, FacebookShareButton, 
    EmailShareButton, WhatsappShareButton,
    WhatsappIcon,
    LinkedinIcon,
    FacebookIcon,
    EmailIcon,
    InstapaperShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    PinterestShareButton,
    PinterestIcon,
    InstapaperIcon} from 'react-share'

const ShareLink = ({url}: {url: string}) => {
    return ( 
        <Paper
        elevation={3} 
        sx={{
            display: 'flex',
            backgroundImage: "linear-gradient(180deg, #CEE5FD, #FFF)",
            justifyContent: 'center',
            alignItems: 'center',
            height: '120px',
            width: '100%',
            borderRadius: '12px',
            padding: '0px 13px',
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
            <div className="w-full flex flex-row gap-6 justify-center">
                <WhatsappShareButton 
                url={url}
                >
                    <WhatsappIcon round size={30} />
                </WhatsappShareButton>
                <LinkedinShareButton 
                url={url}
                >
                    <LinkedinIcon round size={30} />
                </LinkedinShareButton>
                <FacebookShareButton 
                url={url}
                >
                    <FacebookIcon round size={30} />
                </FacebookShareButton>
                <EmailShareButton 
                url={url}
                >
                    <EmailIcon round size={30} />
                </EmailShareButton>
                <TwitterShareButton 
                url={url}
                >
                    <TwitterIcon round size={30} />
                </TwitterShareButton>
                <InstapaperShareButton 
                url={url}
                >
                    <InstapaperIcon round size={30} />
                </InstapaperShareButton>
            </div>

        </Paper>
     );
}
 
export default ShareLink;