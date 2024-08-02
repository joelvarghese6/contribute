import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

const FundraiserCard = ({ image, title, description, onClick }) => {
  return (
    <Card onClick={onClick} sx={{ maxWidth: 345, margin: 2, cursor: 'pointer' }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FundraiserCard;
