
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages/Index';
import Agenda from './pages/Agenda';
import Venue from './pages/Venue';
import Speakers from './pages/Speakers';
import Exhibitors from './pages/Exhibitors';
import Sponsors from './pages/Sponsors';
import Sponsorships from './pages/Sponsorships';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import NotFound from './pages/NotFound';
import CountyRegistration from './pages/registration/CountyRegistration';
import VendorRegistration from './pages/registration/VendorRegistration';
import Hotels from './pages/Hotels';
import Updates from './pages/Updates';
import ScheduleChat from './pages/ScheduleChat';
import { AuthProvider } from './contexts/auth/AuthContext';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="agenda" element={<Agenda />} />
            <Route path="venue" element={<Venue />} />
            <Route path="speakers" element={<Speakers />} />
            <Route path="exhibitors" element={<Exhibitors />} />
            <Route path="sponsors" element={<Sponsors />} />
            <Route path="sponsorships" element={<Sponsorships />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="registration/county" element={<CountyRegistration />} />
            <Route path="registration/vendor" element={<VendorRegistration />} />
            <Route path="hotels" element={<Hotels />} />
            <Route path="updates" element={<Updates />} />
            <Route path="schedule-chat" element={<ScheduleChat />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
