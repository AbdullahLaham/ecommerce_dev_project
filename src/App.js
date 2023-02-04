import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignupPage from './containers/SignupPage';
import ShopPage from './containers/ShopPage';
import LoginPage from './containers/LoginPage';
import HomePage from './containers/HomePage';
import ListProducts from './containers/FilterProducts/ListProducts';
import GridProducts from './containers/FilterProducts/GridProducts';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetails from './containers/productDetails';
import ProdDetails from './containers/ProdDetails';
import WishlistPage from './containers/WishlistPage';
import CartPage from './containers/CartPage';
import { useState } from 'react';
import BottomMenue from './components/BottomMenue';

function App() {
  const [showAccountSidebar, setShowAccountSidebar] = useState(false);
  return (
    <div className="App relative">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage showAccountSidebar={showAccountSidebar} setShowAccountSidebar={setShowAccountSidebar} />} />
        <Route path='/list' element={<ListProducts />} />
        <Route path='/grid' element={<GridProducts />} />
        <Route path='/product/:slug' element={<ProdDetails />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<SignupPage />} />
        <Route path='/wishlist' element={<WishlistPage />} />
        <Route path='/cart' element={<CartPage />} />
        {/* <Route path='/shop' element={<GridProducts />} /> */}
      </Routes>
      <Footer />
      <BottomMenue showAccountSidebar={showAccountSidebar} setShowAccountSidebar={setShowAccountSidebar}  /> 
    </div>
  );
}

export default App;

