import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';

const NewsSummaryCard = ({ singleNews }) => {
    console.log(singleNews)
    const { _id, author, rating, details, image_url, title, total_view } = singleNews;
    const { name, img, published_date } = author;
    return (
        <div>
            <Card className="mb-3">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <div>
                            <img className='rounded-circle me-2' src={img} style={{ height: '60px' }} alt="" />
                        </div>
                        <div>
                            <p className='mb-0'>{name ? name : 'Info Unavaialbe'}</p>
                            <p className='mb-0'>{published_date ? published_date : 'Info Unavaialbe'}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark className='me-2'></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details.length > 200 ?
                            <p>{details.slice(0, 250) + '...'} <Link className='text-decoration-none' to={`/news/${_id}`}>read more.</Link></p> :
                            <p>{details}</p>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <div className='d-flex align-items-center'>
                        <FaStar className='me-2'></FaStar>
                        {rating.number}
                    </div>
                    <div className='d-flex align-items-center'>
                        <FaEye></FaEye>
                        <p className='mb-0 ms-2'>{total_view}</p>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;