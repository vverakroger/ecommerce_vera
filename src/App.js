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
            <Route path={`/details/${1}`} element={<ItemDetailContainer number={1}/>}/>
            <Route path={`/details/${2}`} element={<ItemDetailContainer number={2}/>}/>
            <Route path={`/details/${3}`} element={<ItemDetailContainer number={3}/>}/>
            <Route path={`/details/${4}`} element={<ItemDetailContainer number={4}/>}/>
            <Route path={`/details/${5}`} element={<ItemDetailContainer number={5}/>}/>
            <Route path={`/details/${6}`} element={<ItemDetailContainer number={6}/>}/>
            <Route path={`/details/${7}`} element={<ItemDetailContainer number={7}/>}/>
            <Route path={`/details/${8}`} element={<ItemDetailContainer number={8}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
