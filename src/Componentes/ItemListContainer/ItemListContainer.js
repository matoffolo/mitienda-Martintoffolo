import React from 'react';
import { Card  } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({imagen,titulo,descripcion}) => {

  return (
    <div>
<Card>
    <Card.Img variant="top" src= {imagen} />
  <Card.Body>
    <Card.Title> {titulo} </Card.Title>
    <Card.Text>{descripcion}</Card.Text>
    <ItemCount/>
  </Card.Body>
</Card>
    </div>
  );
}

export default ItemListContainer;
