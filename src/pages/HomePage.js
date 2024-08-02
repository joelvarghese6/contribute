import React, { useState } from "react";
import { useOkto } from "okto-sdk-react";
import { Container, Typography, Box } from "@mui/material";
import FundraiserCard from "../components/FundRaiserCard";
import { useNavigate } from "react-router-dom";

const dummyFundraisers = [
  {
    id: 1,
    image: "/demo1.jpg",
    title: "Project 1",
    description: "Description for project 1",
    twitter: "https://twitter.com/project1",
    telegram: "https://t.me/project1",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/600x200",
    title: "Project 2",
    description: "Description for project 2",
    twitter: "https://twitter.com/project2",
    telegram: "https://t.me/project2",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/600x200",
    title: "Project 3",
    description: "Description for project 3",
    twitter: "https://twitter.com/project3",
    telegram: "https://t.me/project3",
  },
];

function HomePage() {
  console.log("homepage rendered");

  const handleCardClick = () => {
    console.log("fundraiser");
  };

  return (
    <div className="flex justify-content items-center min-h-screen">
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" component="h1" gutterBottom>
            BlockFund
          </Typography>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Our Crowdfunding App
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
          >
            {dummyFundraisers.map((fundraiser) => (
              <FundraiserCard
                key={fundraiser.id}
                image={fundraiser.image}
                title={fundraiser.title}
                description={fundraiser.description}
                onClick={() => handleCardClick()}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </div>
  );
}
export default HomePage;
