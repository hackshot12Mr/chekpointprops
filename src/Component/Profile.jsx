import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Profile = ({item}) => {
  
  return (
    <div className='profile'>
        <Card className='profie' style={{ width: '16rem' }}>
      <Card.Img variant="top" src= {item.Image} />
      <Card.Body>
        <Card.Title>{item.fullname}</Card.Title>
        <Card.Text>{item.Bio}</Card.Text>
        <Card.Text>{item.profession}</Card.Text>
        <Button >info for me</Button>
      </Card.Body>
    </Card>
    {
      
    }
    </div>
  )
}
