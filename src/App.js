import '../src/Assets/Css/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AboutUs />} path='/about-us' />
          <Route element={<Services />} path='/services' />
          <Route element={<Blog />} path='/blog' />
          <Route element={<Contact />} path='/contact' />
          <Route element={<NotFound />} path="*" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
