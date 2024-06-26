import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Card from '../Card/Card.jsx';
import Reports from './Reports/Reports.jsx';
import RecentSales from './RecentSales/RecentSales.jsx';
import TopSelling from './TopSelling/TopSelling.jsx';
import RecentActivity from './RecentActivity/RecentActivity.jsx';
import BudgetReport from './BudgetReport/BudgetReport.jsx';
import WebTraffic from './WebTraffic/WebTraffic.jsx';
import News from './News/News.jsx';

function Dashboard() {
    const [ cards, setCards ] = useState([]);

    const fetchData = () => {
        fetch('https://gist.githubusercontent.com/SaifShariq/1f1b3756876b5fa71ed48fe1f768f1ab/raw/092214cd2f137bb791a5e89d0cb0229ec7eb5aef/cards.json')
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
            <div className="col-lg-4">
                <RecentActivity />
                <BudgetReport />
                <WebTraffic />
                <News />
            </div>
        </div>
        </section>
    )
}

export default Dashboard;