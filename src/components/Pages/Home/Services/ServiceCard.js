import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
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
          <Typography variant="body2" className="mb-8" color="text.secondary">
            {service.details.slice(0, 100) + '...'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p className="mt-4 font-semibold">Ratings: {service.rating}</p>
            <p className="mt-2 font-semibold">Price: ${service.price}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         <Link className="" to={`/services/all/${service._id}`}>
             Details
         </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
