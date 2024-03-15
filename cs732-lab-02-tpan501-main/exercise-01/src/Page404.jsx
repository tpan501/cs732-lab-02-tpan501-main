import { useLocation } from "react-router-dom";
export default function Page404() {
    const { pathname } = useLocation();
    return (
        <div>
        <h1>404 - Not Found</h1>
        <p>No match for <code>{pathname}</code></p>
        </div>
    );
    }
