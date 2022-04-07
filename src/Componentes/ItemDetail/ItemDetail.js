import * as React from 'react';
import {Card,CardContent, CardMedia,Typography } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'


const  ItemDetail =({data}) => {
  return (
  <div className='CharacterList-Container'>
    <Card sx={{ maxWidth: 300}}>
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
        <Typography gutterBottom variant="h5" component="div">
          {data.description}
        </Typography>
      </CardContent >
      <ItemCount onAdd={data}/>
    </Card>
  </div>
  );
}

export default ItemDetail