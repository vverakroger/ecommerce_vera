import NavBar from './components/navBar/NavBar';
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import './App.css';
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Shop from "./pages/Shop";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/">
            <Route index element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="shop" element={<Shop />} />
            <Route path={`/details/:id`} element={<ItemDetailContainer/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
