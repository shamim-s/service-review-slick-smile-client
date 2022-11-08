import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={service.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {service.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {service.details.slice(0, 100) + '...'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p className='mt-4 font-semibold'>Rating: {service.rating}</p>
          <p className='mt-2 font-semibold'>Price: {service.price}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/services/all/${service._id}`}><Button size="small">DETAILS</Button></Link>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;