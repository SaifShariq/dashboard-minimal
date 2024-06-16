//Import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

//Import Components
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/SideBar';
import Main from './components/Body/Main';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
       <Header />
       <SideBar />
       <Main />
       <Footer />
       <ScrollToTop />
    </>
  );
}

export default App;
