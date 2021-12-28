import React from "react";
import "./topbar.css";
function Topbar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-pinterest-square"></i>
            </div>
            <div className="topCenter">Center</div>
            <div className="topRight">Right</div>
        </div>
    );
}

export default Topbar;
