import React, {useState, useEffect} from 'react';
import './TopSelling.css';
import CardFilter from '../../Card/CardFilter';
import TopSellingItem from './TopSellingItem';

function TopSelling() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = filter => {
    setFilter(filter);
  }

  const fetchData = () => {
    fetch('https://gist.githubusercontent.com/SaifShariq/8da6c7a2345adb159e524a0678a4495b/raw/3a5379882b52ebf234586b1131eaf81e36c7bba9/topselling.json')
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
    <div className="card top-selling overflow-auto">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body pb-0">
        <h5 className="card-title">
          Top Selling <span>| {filter}</span>
        </h5>

        <table className="table table-borderless">
          <thead className="table-light">
            <tr>
              <th scope='col'>Preview</th>
              <th scope='col'>Product</th>
              <th scope='col'>Price</th>
              <th scope='col'>Sold</th>
              <th scope='col'>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {
              items && items.length > 0 && items.map(item => <TopSellingItem key={item._id} item={item} />)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TopSelling;