//Import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/SideBar';
import Main from './components/Body/Main';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <>
       <Header />
       <SideBar />
       <Main />
    </>
  );
}

export default App;
