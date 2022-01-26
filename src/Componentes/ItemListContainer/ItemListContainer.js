import React from 'react';
import { Card  } from 'react-bootstrap';


const ItemListContainer = ({imagen,titulo,descripcion}) => {
  return (
    <div>
    <Card>
    <Card.Img variant="top" src= {imagen} />
  <Card.Body>
    <Card.Title> {titulo} </Card.Title>
    <Card.Text>{descripcion}</Card.Text>
  </Card.Body>
</Card>
    </div>
  );
}

export default ItemListContainer;
