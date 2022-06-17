
// import './components/Slider.css';
import { Route, Routes, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import '../node_modules/bootstrap/scss/_accordion.scss'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ImageSlider from './components/Slider';
import Dresses from './components/Dresses';
import Clothing from './components/Clothing';
import Furniture from './components/Furniture';
import Wedding from './components/Wedding';
import Sale from './components/Sale';
import Accessories from './components/Accessories';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import Address from './components/Address';
import Shipping from './components/Shipping';
import Carddetails from './components/Carddetails';
import Login from './components/Login';
import Otp from './components/Otp';
import Success from './components/Success';
import Shoes from './components/Shoes';

function App() {
 
  return (
    <div>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Dresses' element={<Dresses  />}/>
      <Route path="/Dresses/:id" element={<SingleProduct />}/>
      <Route path='/Accessories' element={<Accessories/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Address' element={<Address/>}/>
      <Route path='/Shipping' element={<Shipping/>}/>
      <Route path='/Carddetails' element={<Carddetails/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Otp' element={<Otp/>}/>
      <Route path='/Success' element={<Success/>}/>
      <Route path='/Clothing' element={<Clothing/>}/>
      <Route path='/Shoes' element={<Shoes/>}/>
      <Route path='/Furniture' element={<Furniture/>}/>
      <Route path='/Wedding' element={<Wedding/>}/>
      <Route path='/Sale' element={<Sale/>}/>
     </Routes>
    
      <Footer/>
    </div>
  );
}

export default App;
