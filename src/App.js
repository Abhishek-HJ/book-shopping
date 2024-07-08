import './App.css';
import Nav from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Footer from './components/Footer/Footer';
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import kids_banner from './assets/banner_kids.png';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Personality' element={<ShopCategory banner={men_banner}  category="Personality Development"/>}/>
        <Route path='/Education' element={<ShopCategory banner={women_banner} category="Education"/>}/>
        <Route path='/Fiction' element={<ShopCategory banner={kids_banner} category="Fiction"/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}></Route>
        
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;