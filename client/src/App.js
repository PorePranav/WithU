import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Subscribe from './components/Payments/Subscribe';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import NotFound from './components/Layout/NotFound/NotFound';
import PaymentFail from './components/Payments/PaymentFail';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard';
import Sidebar from './components/Admin/Sidebar';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import Users from './components/Admin/Users/Users';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import Fundraiser from './components/Blockchain/Fundraiser';
import Testimonials from './components/Blockchain/Testimonials';
import Chatbot from './components/chatbot/chatbot';

function App() {
  window.addEventListener(`contextmenu`, e => {
    e.preventDefault();
  });

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/about" element={<About />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="/paymentsucess" element={<PaymentSuccess />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/paymentfail" element={<PaymentFail />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/Sidebar" element={<Sidebar />} />
        <Route path="/admin/createcourse" element={<CreateCourse />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/courses" element={<AdminCourses />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/restpassword/:token" element={<ResetPassword />} />
        <Route path="/request" element={<Request />} />
        <Route path="/fundraiser" element={<Fundraiser />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
