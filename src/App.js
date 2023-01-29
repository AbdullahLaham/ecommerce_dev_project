import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignupPage from './containers/SignupPage';
import ShopPage from './containers/ShopPage';
import LoginPage from './containers/LoginPage';
import HomePage from './containers/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<SignupPage />} />
        <Route path='/shop' element={<ShopPage />} />

      </Routes>
    </div>
  );
}

export default App;
