import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from './pages/Home';
import DIYdetail from './pages/DIYdetail';
import Shop from './pages/Shop';
import ProdShop from './pages/productsh';
import Searchdetail from './pages/searchdetail';
import Prodbycategory from './pages/Prodbycategory';

function App() {
  return (
    <GoogleOAuthProvider clientId="754835046681-kanu47urgrg7cjl7aj0a8io5s6ic9n3f.apps.googleusercontent.com">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/detail/:productId" element={<DIYdetail/>} />
        <Route path="/shop/:shopId" element={<Shop />} />
        <Route path="/prodshop" element={<ProdShop/>} />
        <Route path="/search" element={<Searchdetail/>} />
        <Route path="/categories/:categoryId" element={<Prodbycategory />} />
      </Routes>
    </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
