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
import { useEffect, useState } from 'react';
import BottomMenue from './components/BottomMenue';
import AccountSidebarComponent from './components/AccountSidebarComponent';
import { useMediaQuery } from '@mui/material';
import Dashboard from './containers/Dashboard';


function App() {
  const [showAccountSidebar, setShowAccountSidebar] = useState(false);
  const isMobile = useMediaQuery("(max-width: 800px)");
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [showAccountSidebar])
  return (
    <div className="App w-[100%] min-w-[100%] max-w-[100%] relative">
      <Header />
      {isMobile && <AccountSidebarComponent showAccountSidebar={showAccountSidebar} setShowAccountSidebar={setShowAccountSidebar} />}
      <Routes>
        <Route path='/' element={<HomePage showAccountSidebar={showAccountSidebar} setShowAccountSidebar={setShowAccountSidebar} />} />
        <Route path='/list' element={<ListProducts />} />
        <Route path='/grid' element={<GridProducts />} />
        <Route path='/product/:slug' element={<ProdDetails />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<SignupPage />} />
        <Route path='/dashboard' element={<Dashboard />} >
          <Route path='cart' element={<CartPage />} />
          <Route path='wishlist' element={<WishlistPage />} />

        </Route>

        {/* <Route path='/shop' element={<GridProducts />} /> */}
      </Routes>
      <Footer />
      <BottomMenue showAccountSidebar={showAccountSidebar} setShowAccountSidebar={setShowAccountSidebar}  /> 
    </div>
  );
}

export default App;

