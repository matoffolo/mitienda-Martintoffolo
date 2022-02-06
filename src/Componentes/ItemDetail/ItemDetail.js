import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const  ItemDetail =({data}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
       
        image={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body3" color="text.primary">
        {data.description}
        </Typography>
      </CardContent >
      <CardActions>
        '$'{data.price}
      </CardActions>
    </Card>
  );
}

export default ItemDetail