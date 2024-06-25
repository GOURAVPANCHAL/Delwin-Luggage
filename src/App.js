import './App.css';
import Navbar from './Home/navbar';
import Products from './Home/products';
import Footer from './Home/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Home/homepage';
import Contact from './Home/contact';
import Testimonial from './Home/testimonial';
import About from './Home/about';
import Blog from './Home/blog';
import CenterImage from './Home/centerImage'
import ProductDetail from './Home/productDetail';
import DuffleBags from './Home/duffleBag';
import Briefcase from './Home/briefcase';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Homepage />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/duffleBags" element={<DuffleBags />} />
          <Route path="/briefcase" element={<Briefcase />} />

          <Route path="/Products-Info/:name/:id" element={<ProductDetail />} />

        </Routes>
        {/* <CenterImage/> */}
        <Footer />
      </BrowserRouter>







    </>
  );
}

export default App;
