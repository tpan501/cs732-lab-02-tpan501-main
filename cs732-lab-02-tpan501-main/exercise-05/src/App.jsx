import { Route, Routes } from "react-router-dom";
import PokedexLayout from "./PokedexLayout";
import PokedexPage from "./PokedexPage";
import { Navigate } from "react-router-dom";


/**
 * Main app entry point, controls the routes in this app.
 */
function App() {

  return (
    <Routes>
      <Route path="/" element={<PokedexLayout />}>
        <Route index element={<Navigate to="1" replace />} />
        {/**Next, modify the Route which renders the PokedexPage as its element, such that it no longer supplies the id as a prop. 
         * And, change it so that is uses a path parameter instead of the hardcoded value of "1".  */}
        <Route path=":id" element={<PokedexPage />} />
      </Route>
    </Routes>
  );
}

export default App;
