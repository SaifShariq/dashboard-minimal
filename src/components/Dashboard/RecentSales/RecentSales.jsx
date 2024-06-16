import React, { useState, useEffect } from 'react';
import './RecentSales.css';
import CardFilter from '../../Card/CardFilter';
import RecentSalesTable from './RecentSalesTable';

function RecentSales() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = filter => {
    setFilter(filter);
  }

  const fetchData = () => {
    fetch('https://gist.githubusercontent.com/SaifShariq/07b024af8d4b793e213c082f873bc245/raw/217420ce6d22de47ca00e220d9f8bf572b25e4cf/recentsales.json')
    .then(res => res.json())
    .then(data => {
        setItems(data);
    })
    .catch(e => console.log(e.message));
    }

    useEffect(() => {
        fetchData();
    }, []);


  return (
    <div className="card recent-sales overflow-auto">
        <CardFilter filterChange={handleFilterChange} />

        <div className="card-body">
            <h5 className="card-title">
                Recent Sales <span>| {filter}</span>
            </h5>
            <RecentSalesTable items={items}/>
        </div>
    </div>
  )
}

export default RecentSales;