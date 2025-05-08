import { Routes, Route, Navigate } from 'react-router-dom';
import Track from '../pages/Track/Track';
import HistoryPage from '../pages/History/History';
import LoginPage from '../pages/Auth/Login';
import SignupPage from '../pages/Auth/SignUp';
import AboutPage from '../pages/AboutUs/AboutUs';
import PartnerWithUs from '../pages/PartnerWithUs/PartnerWithUs';
import ErrorPage from '../pages/Error/Error';
import NotFoundPage from '../pages/NotFound/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/history" element={<HistoryPage />} />
      {/* <Route path="*" element={<Navigate to="/history" replace />} /> */}
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/Signup" element={<SignupPage/>}/>
      <Route path="/track" element={<Track />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/partner" element={<PartnerWithUs />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/notfound" element={<NotFoundPage />} />

    </Routes>
  );
};

export default AppRoutes;
