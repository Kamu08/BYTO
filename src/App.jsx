import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Login from './components/Login';
import SignUp from './components/Signup';
import RentVeh from './components/RentVeh';
import SearchTruck from './components/SearchTruck';
import Team from './components/Team';
import ContactUs from './pages/ContactUs';
import Track from './pages/Track';
import ShipHistory from './pages/ShipHistory';
import BusinessPage from './pages/Business';
import TransportPartner from './pages/Transport';
import AboutUs from './pages/AboutUs';
function App() {
  return (
    <div className=' mt-4 '>
    <Router >
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/search-truck" element={<SearchTruck />} />
        <Route path="/rent-veh" element={<RentVeh />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/track" element={<Track />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/shiphistory" element={<ShipHistory />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/transport" element={<TransportPartner />} />
      </Routes>      
      <Footer />
    </Router>
    </div>
  );
}

export default App;
