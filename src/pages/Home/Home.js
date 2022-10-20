import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h2>This is the Home Component</h2>
            {
                allNews.map(singleNews => <NewsSummaryCard
                    key={singleNews._id}
                    singleNews={singleNews}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;