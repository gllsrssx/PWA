import React from 'react';
import { Card } from 'react-bootstrap';

const Banner = () => (
    <Card className="bg-dark text-white text-center">
        <Card.Img src="banner_image.jpg" alt="Banner" />
        <Card.ImgOverlay>
            <Card.Title>Welcome to our Site!</Card.Title>
            <Card.Text>Discover our amazing products and services</Card.Text>
        </Card.ImgOverlay>
    </Card>
);

export default Banner;