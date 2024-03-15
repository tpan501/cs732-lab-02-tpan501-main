import { Navigate, Route, Routes } from "react-router-dom";
import PageLayout from "./PageLayout";
import ShopPage from "./ShopPage";
import CheckoutPage from "./CheckoutPage";
import Purchase from "./Purchase";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Navigate to="shop" replace />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/purchase" element={<Purchase />} />
      </Route>
    </Routes>
  );
}

export default App;
