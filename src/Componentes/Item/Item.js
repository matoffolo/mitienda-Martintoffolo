import * as React from 'react';
import {Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';




const  Item =({data}) => {
  return (
    
    <Card sx={{ maxWidth: 300,}}>
      <CardMedia 
        component="img"
        alt="Producto"
        image={data.image}
        height = "400"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
      </CardContent >
      <CardActions>
        '$'{data.price}
      </CardActions>
    </Card>
   
  );
}

export default Item