import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Intro from './components/intro';
import About from './components/about';
import Product from './components/product';
import ProductList from './components/productlist';
import Contact from './components/contact';
// import Contact from './components/contact';


function App() {``
  return (
    <div>
      <Intro/>
      <About/>
      {/* <Product/> */}
      <ProductList/>
      {/* <Contact/> */}
      <BrowserRouter>
      <Routes>
        <Route path="Contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
