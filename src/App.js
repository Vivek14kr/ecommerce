import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";

import Navbar from './components/navbar';
import ProductsCategorypage from './components/productscategorypage';

import IndexFinal from './components/IndexFinal';
import SearchPage from './components/SearchPage';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<IndexFinal />} />
        <Route path="/productscategorypage" element={<ProductsCategorypage />} />
        <Route path="/search" element={<SearchPage/>} />
      </Routes>
    </div>
  );
}

export default App;
