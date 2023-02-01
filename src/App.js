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

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/list' element={<ListProducts />} />
        <Route path='/grid' element={<GridProducts />} />
        <Route path='/product/:slug' element={<ProdDetails />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<SignupPage />} />
        <Route path='/shop' element={<ShopPage />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
