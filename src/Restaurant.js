import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Restaurant.css'
import { Link } from 'react-router-dom';



function Restaurent() {
    const [restList,setRest]=useState([])
    //api to access data
    const getData=async()=>{
        const result=await fetch('/restaurants.json') 
        result.json().then(data=>setRest(data.restaurants))
    }
    console.log(restList);
    useEffect(()=>{
        getData()
    },[])
  return (
    <Row>
      {
        restList.map(item=>(
         <Col id lg={4} md={6} className='py-3 px-5'>
      <Link id="li" to={`/viewRest/${item.id}`}>
              <Card style={{ width: '18rem' }}>
              <Card.Img  variant="top" src={item.photograph} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  {item.address}
                </Card.Text>
                
              </Card.Body>
            </Card>
      </Link>
         </Col>
    
        ))
      }
    </Row>
  )
}

export default Restaurent