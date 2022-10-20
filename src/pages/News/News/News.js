import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const newsData = useLoaderData();
    console.log(newsData);
    return (
        <div>
            <h2>New Title: {newsData.title}</h2>
        </div>
    );
};

export default News;