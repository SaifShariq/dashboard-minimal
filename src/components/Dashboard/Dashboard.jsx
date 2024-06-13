import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Card from '../Card/Card.jsx';
import Reports from './Reports/Reports.jsx';
import RecentSales from './RecentSales/RecentSales.jsx';
import TopSelling from './TopSelling/TopSelling.jsx';

function Dashboard() {
    const [ cards, setCards ] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:4000/cards')
        .then(res => res.json())
        .then(data => {
            setCards(data);
        })
        .catch(e => console.log(e.message));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className='dashboard section'>
            {/* using bootstap to show data in row (each row contains 12 columns; splitting them in 8 & 4) */}
        <div className="row">
            <div className="col-lg-8">
                <div className="row">
                    {
                        //check if the cards variable exists using a higher order array function
                        cards && cards.length > 0 && cards.map(card => 
                            <Card key={card._id} card={card} />
                        )
                    }
                    <div className="col-12">
                        <Reports />
                    </div>
                    <div className="col-12">
                        <RecentSales />
                    </div>
                    <div className="col-12">
                        <TopSelling />
                    </div>
                </div>
            </div>
        <div className="col-lg-4"></div>
        </div>
        </section>
    )
}

export default Dashboard;