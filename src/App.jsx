import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Popups from './components/Popups';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import Team from './pages/Team';
import Packages from './pages/Packages';
import PackageDetail from './pages/PackageDetail';
import PriceCalculator from './pages/PriceCalculator';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminBlog from './pages/admin/AdminBlog';
import AdminPortfolio from './pages/admin/AdminPortfolio';
import AdminServices from './pages/admin/AdminServices';
import ProtectedRoute from './components/ProtectedRoute';

function Security() {
  useEffect(() => {
    const noContext = e => e.preventDefault();
    const noKeys = e => {
      if (e.key === 'F12') e.preventDefault();
      if ((e.ctrlKey||e.metaKey) && e.shiftKey && ['I','J','C'].includes(e.key)) e.preventDefault();
      if ((e.ctrlKey||e.metaKey) && e.key === 'u') e.preventDefault();
    };
    document.addEventListener('contextmenu', noContext);
    document.addEventListener('keydown', noKeys);
    return () => {
      document.removeEventListener('contextmenu', noContext);
      document.removeEventListener('keydown', noKeys);
    };
  }, []);
  return null;
}

function PublicLayout({ children }) {
  return <>
    <Navbar/>
    <Popups/>
    <main className="main-content">{children}</main>
    <Footer/>
  </>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Security/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<PublicLayout><Home/></PublicLayout>}/>
        <Route path="/about" element={<PublicLayout><About/></PublicLayout>}/>
        <Route path="/services" element={<PublicLayout><Services/></PublicLayout>}/>
        <Route path="/services/:id" element={<PublicLayout><ServiceDetail/></PublicLayout>}/>
        <Route path="/portfolio" element={<PublicLayout><Portfolio/></PublicLayout>}/>
        <Route path="/portfolio/:id" element={<PublicLayout><PortfolioDetail/></PublicLayout>}/>
        <Route path="/team" element={<PublicLayout><Team/></PublicLayout>}/>
        <Route path="/packages" element={<PublicLayout><Packages/></PublicLayout>}/>
        <Route path="/packages/:id" element={<PublicLayout><PackageDetail/></PublicLayout>}/>
        <Route path="/calculator/:id" element={<PublicLayout><PriceCalculator/></PublicLayout>}/>
        <Route path="/blog" element={<PublicLayout><Blog/></PublicLayout>}/>
        <Route path="/contact" element={<PublicLayout><Contact/></PublicLayout>}/>
        <Route path="/admin" element={<Navigate to="/admin/login"/>}/>
        <Route path="/admin/login" element={<AdminLogin/>}/>
        <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}/>
        <Route path="/admin/blog" element={<ProtectedRoute><AdminBlog/></ProtectedRoute>}/>
        <Route path="/admin/portfolio" element={<ProtectedRoute><AdminPortfolio/></ProtectedRoute>}/>
        <Route path="/admin/services" element={<ProtectedRoute><AdminServices/></ProtectedRoute>}/>
        <Route path="*" element={<PublicLayout><Home/></PublicLayout>}/>
      </Routes>
    </BrowserRouter>
  );
}