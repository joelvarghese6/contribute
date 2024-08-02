// src/Grid.js
import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "School Ground War",
    description: "Old school duels, new school cool.",
    category: "game",
    tags: ["game", "marketplace"],
    amountRaised: 9300,
    goal: 10000,
    image: "/demo1.jpg"
  },
  {
    title: "Metaverse Craft",
    description: "The ultimate sandbox game",
    category: "open source",
    tags: ["game", "Community"],
    amountRaised: 4200,
    goal: 5000,
    image: "/demo2.jpeg"
  },
  {
    title: "DAOCre-8",
    description: "Pioneering a DAO-powered Renaissance",
    category: "crowdfunding",
    tags: ["crowdfunding", "DAO"],
    amountRaised: 2200,
    goal: 3000,
    image: "/demo3.jpeg"
  },
  {
    title: "WORK DAO",
    description: "We sustain and advance open-source work.",
    category: "open source",
    tags: ["Open Source", "Community"],
    amountRaised: 4200,
    goal: 5000,
    image: "/demo4.jpeg"
  },
  {
    title: "DAOCre-8",
    description: "Pioneering a DAO-powered Renaissance",
    category: "crowdfunding",
    tags: ["crowdfunding", "DAO"],
    amountRaised: 2200,
    goal: 3000,
    image: "/demo5.jpeg"
  },
];

const Grid = () => {
  return (
    <div className="container mx-auto py-10 p-16" id="grid">
      <h1 className="text-4xl font-bold text-center text-white mb-10">Trending Fundraisers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="grid">
        {projects.map((project, index) => (
          <Link to="/about"><Card key={index} {...project} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Grid;
