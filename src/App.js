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
import { SnackbarProvider } from 'notistack';
import ProfilePage from './containers/ProfilePage';
// import DeviceDetector from "device-detector-js";
import UserAgent from 'user-agents';


function App() {
  const [showAccountSidebar, setShowAccountSidebar] = useState(false);
  // the category for the shop page
  const [filterCategory, setFilterCategory] = useState();

  const isMobile = useMediaQuery("(max-width: 800px)");
  // const deviceDetector = new DeviceDetector();
  
  // the type of the device
  const userAgent = new UserAgent();
  console.log(userAgent.toString());
  console.log(JSON.stringify(userAgent.data, null, 2));

  useEffect(() => {

  }, [])
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [showAccountSidebar]);
  
  return (
    <div className="App w-[100%] min-w-[100%] max-w-[100%]  relative">
      <Header filterCategory={filterCategory} setFilterCategory={setFilterCategory} />
      {isMobile && <AccountSidebarComponent showAccountSidebar={showAccountSidebar} setShowAccountSidebar={setShowAccountSidebar} />}
      <Routes>
        <Route path='/' element={<HomePage showAccountSidebar={showAccountSidebar} setShowAccountSidebar={setShowAccountSidebar}   />} />
        <Route path='/list' element={<ListProducts  />} />
        <Route path='/grid' element={<GridProducts filterCategory={filterCategory} setFilterCategory={setFilterCategory} />} />
        <Route path='/product/:slug' element={<ProdDetails />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<SignupPage />} />
        <Route path='/dashboard' element={<Dashboard />} >
          <Route path='cart' element={<CartPage />} />
          <Route path='wishlist' element={<WishlistPage />} />
          <Route path='profile' element={<ProfilePage />} />
        </Route>

        {/* <Route path='/shop' element={<GridProducts />} /> */}
      </Routes>
      <Footer />
      <BottomMenue showAccountSidebar={showAccountSidebar} setShowAccountSidebar={setShowAccountSidebar}  /> 
    </div>
  );
}

export default App;

