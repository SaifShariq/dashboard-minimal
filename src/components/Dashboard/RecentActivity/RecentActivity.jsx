import React, {useState, useEffect} from 'react';
import CardFilter from '../../Card/CardFilter';
import RecentActivityItem from './RecentActivityItem';
import './RecentActivity.css';

function RecentActivity() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    };

    const fetchData = () => {
        fetch('https://gist.githubusercontent.com/SaifShariq/46c7f35ba234f72f4714178da44cea99/raw/513f1a77cdfbd985e2524dfcd9e4ed16bb1e8a92/recentactivity.json')
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
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body pb-20">
        <h5 className="card-title">
          Recent Activity <span>| {filter}</span>
        </h5>
        <div className="activity">
            {
              items && items.length > 0 && items.map(item => (
                <RecentActivityItem key={item._id} item={item} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default RecentActivity;