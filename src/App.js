
import './App.css';
import Announcement from './components/Announcement';
import Category from './components/Category';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Product from './components/Product';
import Slider from './components/Slider';

export default function App() {
  return (
    <div>
      <Announcement/>
      <Navbar />
      <Slider/>
      <Category/>
      <Product/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

