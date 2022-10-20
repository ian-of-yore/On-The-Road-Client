import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';


const News = () => {
    const newsDetails = useLoaderData();
    const { author, details, image_url, title, rating } = newsDetails;

    console.log(newsDetails);
    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div className='d-flex justify-content-around align-items-center my-3'>
                    <div>
                        <span className='fw-bold'>Author: </span>{author.name}
                    </div>
                    <div>
                        <span className='fw-bold'>Published On: </span>{author.published_date}
                    </div>
                    <div className='d-flex align-items-center'>
                        <FaStar className='me-1 text-warning'></FaStar>
                        <p className='mb-0 fw-bold'>{rating.number}</p>
                    </div>
                </div>
                <Card.Text>
                    {details}
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default News;