import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeComponent from './components/HomeComponent';
import ContactComponent from './components/ContactComponent';
import ProductsComponent from './components/products/ProductsComponent';
import Navbar from './components/navbar/Navbar';
import SingleProduct from './components/SingleProduct';


function App() {
  return (
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route exact path = "/" element={<HomeComponent/>}/>
      <Route exact path = "/products" element={<ProductsComponent/>}/>
      <Route exact path="/product/:productId" element={<SingleProduct />} />
      <Route exact path = "/contact" element={<ContactComponent/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;