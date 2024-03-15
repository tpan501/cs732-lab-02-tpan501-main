import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import PageLayout from "./PageLayout";
import Page404 from "./Page404";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    /**
     * When we navigate to the path /, the HomePage should be rendered.
        When we navigate to the path /about, the AboutPage should be rendered.
        If we navigate anywhere else, just a blank screen should be displayed at this stage.
     */
  
      <Routes>
        <Route path="/" element={<PageLayout />}>
         <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
        <Route path="*" element={<Page404 />} />

      
      </Routes>

    
   
  );
}

export default App;
