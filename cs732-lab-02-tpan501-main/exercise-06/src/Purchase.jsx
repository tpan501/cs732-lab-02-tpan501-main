import React from "react";
import { Link } from "react-router-dom";

export default function Purchase() {
    return (
        <div>
        <h1>Thank you for your purchase!</h1>
        <Link to="/shop">Back to shop</Link>
        </div>
    );
    }