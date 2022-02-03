import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Item = ({data}) => {
  return (
    <Card className='card' sx={{ maxWidth: 345 }} >
      <CardContent className='card'> 
        <Typography gutterBottom variant="h5" component="div">
         {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>Telefono: {data.phone}</p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.website}
        </Typography>
      </CardContent>
    
    </Card>
  );
}
export default Item;