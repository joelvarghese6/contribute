// src/Card.js
import { Chip } from '@mui/material';
import React from 'react';

const Card = ({ title, description, category, tags, amountRaised, goal, image }) => {
  return (
    <div className="bg-[#FAFAC6] rounded-lg shadow-md p-6 text-white">
      <img src={image} alt="Project" className="rounded-t-lg w-full h-48 object-cover mb-4" />
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-black">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </div>
      <div className="flex space-x-2 mb-4">
        {tags.map(tag => (
          <Chip label={tag} />
        ))}
      </div>
      <p className="text-lg font-semibold text-black">${amountRaised} raised</p>
      <div className="w-full bg-gray-600 rounded-full h-2.5 mt-2">
        <div className="bg-amber-300 h-2.5 rounded-full" style={{ width: `${(amountRaised / goal) * 100}%` }}></div>
      </div>
    </div>
  );
};

export default Card;
