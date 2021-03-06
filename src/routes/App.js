import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PasswordRecovery from "../pages/PasswordRecovery";
import SendEmail from "../pages/SendEmail";
import NewPassword from "../pages/NewPassword";
import MyAccount from "../pages/MyAccount";
import CreateAccount from "../pages/CreateAccount";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import NotFound from "../pages/NotFound";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import PrivateRoute from "../components/PrivateRoute";
import "../styles/global.css";
import ProductDetail from "../pages/ProductDetail";
function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* <Route exact path="/" element={<Home />} /> */}
            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/" element={<Home />} />
            </Route>

            <Route
              exact
              path="/recovery-password"
              element={<PasswordRecovery />}
            />
            <Route exact path="/send-email" element={<SendEmail />} />
            <Route exact path="/new-password" element={<NewPassword />} />
            <Route exact path="/account" element={<MyAccount />} />
            <Route exact path="/signup" element={<CreateAccount />} />
            <Route
              exact
              path="/product-detail/:idProducto"
              element={<ProductDetail />}
            />
            <Route exact path="/checkout" element={<PrivateRoute />}>
              <Route exact path="/checkout" element={<Checkout />} />
            </Route>
            <Route exact path="/orders" element={<PrivateRoute />}>
              <Route exact path="/orders" element={<Orders />} />
            </Route>
            <Route element={<NotFound />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
