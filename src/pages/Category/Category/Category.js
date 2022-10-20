import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>{`This Category Has ${categoryNews.length} News`}</h2>
            {
                categoryNews.map(singleNews => <NewsSummaryCard
                    key={singleNews._id}
                    singleNews={singleNews}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;