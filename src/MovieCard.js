import React from 'react'
import { Card,Container,Row,Col } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component'


const MovieCard = ({movie}) => {
    return (
        <div>
        <Container>
        <Row>
            <Col style={{color:'black'}}>  Next Movie </Col>
        </Row>
        <Col>
            <Card>
                <Card.Img variant="top" src={movie.posterUrl} />
                <Card.Body >
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                {movie.description}
                </Card.Text>
                </Card.Body>
                <StarRatingComponent value={movie.rate} />
                </Card>
        </Col>
        </Container>
        </div>
    )
}

export default MovieCard
