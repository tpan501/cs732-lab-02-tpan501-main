import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
export default function PageLayout({ children }) {
    return (
        <div className="container">
            
            <div className="header">
                <Navbar/>
            </div>
        <Outlet/>
            <div className="footer">
                The end of the page.
            </div>
        </div>
    );
}