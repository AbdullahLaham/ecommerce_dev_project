import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignupPage from './containers/SignupPage';
import ShopPage from './containers/ShopPage';
import LoginPage from './containers/LoginPage';
import HomePage from './containers/HomePage';
import ListProducts from './containers/FilterProducts/ListProducts';
import GridProducts from './containers/FilterProducts/GridProducts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/list' element={<ListProducts />} />
        <Route path='/grid' element={<GridProducts />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<SignupPage />} />
        <Route path='/shop' element={<ShopPage />} />

      </Routes>
    </div>
  );
}

export default App;
