import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Moviecard from './MovieCard'

const Movielist = ({list}) => {
    return (
        <Container>
        <Row>
        {list.length ?list.map( (elm,index)=><Col md={4} xs={12}> <Moviecard key={index} movie={elm}> </Moviecard></Col>) : <h2 style={{color:"white"}}>No Movie Found</h2>}
        </Row>
        </Container>
    )
}

export default Movielist
