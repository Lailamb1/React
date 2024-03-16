import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeComponent from './components/HomeComponent';
import ContactComponent from './components/ContactComponent';
import ProductsComponent from './components/products/ProductsComponent';
import Navbar from './components/navbar/Navbar';
import ProductDetails from './components/ProductsDetail';
import Product from './components/SingleProduct';


function App() {
  return (
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route exact path = "/" element={<HomeComponent/>}/>
      <Route exact path = "/products" element={<ProductsComponent/>}/>
      <Route exact path = "/products" element={<Product/>}/>
      <Route exact path="/product/:id" element={<ProductDetails />} />
      <Route exact path = "/contact" element={<ContactComponent/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;