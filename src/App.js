import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import ProductListeningPage from './pages/ProductListeningPage';
import ProductDescriptionPage from './pages/ProductDescriptionPage';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={Home} />
      <Route exact path="/product/:id" element={ProductDescriptionPage} />
      <Route path="/category/:category" element={ProductListeningPage} />
      <Route path="/cart" element={CartPage} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
