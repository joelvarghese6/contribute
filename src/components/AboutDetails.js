import React from "react";
import { Paper, Typography, Box, Avatar, Link } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

const CrowdfundingDetails = ({
  image,
  title,
  description,
  twitter,
  telegram,
  avatar
}) => {
  const contact = {
    twitter: "sdsdsds",
    telegram: "sdsdsdsd",
  };
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        maxWidth: 600,
        margin: "auto",
        backgroundColor: "#FFF9A5",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Avatar
          variant="rounded"
          src={image}
          sx={{ width: "100%", height: 200, marginBottom: 2 }}
        />
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          {description}
        </Typography>
      </Box>
      <div className="flex justify-between items-center mt-16 rounded-lg text-white">
        <div className="flex flex-row items-center">
          <img
            src={avatar}
            className="rounded-full w-12 h-12 object-cover mr-4"
            alt="AV"
          />
          <h3 className="text-black font-bold items-center">Jacob</h3>
        </div>
        <div className="flex flex-col items-start">
        
          <div className="flex items-center space-x-4 ">
            {contact.twitter && (
              <a
                href={`https://twitter.com/${contact.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                <TwitterIcon />
              </a>
            )}
            {contact.telegram && (
              <a
                href={`https://t.me/${contact.telegram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                <TelegramIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default CrowdfundingDetails;
