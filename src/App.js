import React, { useState, useEffect } from 'react';
import './App.css';
//FIREBASE
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from './firebase/firebaseConfig'
//REACT DOM
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//CONTEXT
import {CartProvider} from "./context/CartContext";
//VIEWS
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Shop from "./pages/Shop";
import NavBar from './components/navBar/NavBar';
//COMPONENTS
import Cart from "./components/cart/Cart";
//CONTAINERS
import ItemDetailContainer from "./components/containers/ItemDetailContainer";


function App() {

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, 'clothes'), where('stock', '>', 0));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id });
      });
      setProductsData(docs);
    };
    getProducts();
  }, [])

  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/">
            <Route index element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="shop" element={<Shop productsData={productsData}/>} />
            <Route path={`/details/:id`} element={<ItemDetailContainer productsData={productsData}/>}/>
            <Route path={`/cart`} element={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );

}

export default App;
