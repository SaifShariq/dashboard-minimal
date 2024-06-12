import React from 'react';
import './Main.css';
import PageTitle from './PageTitle';
import Dashboard from '../Dashboard/Dashboard';

function Main() {
  return (
    <main id='main' className='main'>
      <PageTitle page='Home' />
      <Dashboard />
    </main>
  )
}

export default Main;
