import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Moviecard from './MovieCard'

const Movielist = ({list}) => {
    return (
        <Container>
        <Row>
        {list.length ? list.map( (elm,index)=> <Moviecard key={index} movie={elm}> </Moviecard>) : <h2 style={{color:"white"}}>No Movie Found</h2>}
        </Row>
        </Container>
    )
}

export default Movielist