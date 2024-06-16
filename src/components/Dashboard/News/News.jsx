import React, { useState, useEffect } from 'react';
import './News.css';
import CardFilter from '../../Card/CardFilter';
import NewsPostItem from './NewsPostItem';

function News() {
    const [news, setNews] = useState([]);
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    }

    const fetchData = () => {
        fetch('https://gist.githubusercontent.com/SaifShariq/cd4ba09ec78baefd5a4b56812351ec5b/raw/fdc7708e3c1efb8e3cf40e3c3713b375b6a62e88/news.json')
        .then(res => res.json())
        .then(data => {
            setNews(data);
        })
        .catch(e => console.log(e.message));
    }
    
    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className="card">
        <CardFilter filterChange={handleFilterChange} />

        <div className="card-body-pb-0">
            <h5 className="card-title">
                News &amp; Updates <span>| {filter}</span>
            </h5>

            <div className="news">
                {
                    news && news.length > 0 && news.map(item => <NewsPostItem key={item._id} item={item}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default News;