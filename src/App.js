import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import OneProduct from "./pages/OneProduct/OneProduct";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Checkout from "./pages/Checkout/Checkout";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={''} element={<Layout/>}>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/store'} element={<Store/>}/>
                    <Route path={'/product/:id'} element={<OneProduct/>}/>
                    <Route path={'/cart'} element={<Cart/>}/>
                    <Route path={'/checkout'} element={<Checkout/>}/>
                </Route>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/register'} element={<Register/>}/>
            </Routes>
        </div>
    );
}

export default App;
