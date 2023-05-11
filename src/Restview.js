import React, { useEffect, useState } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Operatingtime from './Operatingtime'
import Review from './Review'




function Restview() {
  const [restList,setRest]=useState([])
    //api to access data
    const getData=async()=>{
        const result=await fetch('/restaurants.json') 
        result.json().then(data=>setRest(data.restaurants))
    }
    // onject create for useParams
    const params=useParams()
    console.log(params.id);

    // find single restaurants data

const singleRest=restList.find(i=>i.id==params.id)
console.log(singleRest);
    useEffect(()=>{
        getData()
    },[])

    
    
  return (
    <>
      {
    singleRest?(
      <Row>
        <Col lg={6} md={6}>
          <img className='w-75 container p-5' src={singleRest.photograph}/>
        </Col>
        <Col lg={6} md={6} className='mt-5 fs3 p-3'>

          <ListGroup>
            <ListGroup.Item><h1 className='text-warning'>{singleRest.name}</h1></ListGroup.Item>
            <ListGroup.Item>Address<strong>{singleRest.address}</strong></ListGroup.Item>
            <ListGroup.Item>Neighborhood<strong>{singleRest.neighborhood}</strong></ListGroup.Item>
            <ListGroup.Item>Cusine Type<strong>{singleRest.cuisine_type}</strong></ListGroup.Item>
          

<Operatingtime workingTime={singleRest.operating_hours}/>
<Review reviewList= {singleRest.reviews}/>

</ListGroup>

        </Col>
      </Row>):""
      }      
  </>
  )
  
}

export default Restview