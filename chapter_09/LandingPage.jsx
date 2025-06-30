import React, { useState } from "react";
import Toolbar from "./Tollbar";

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const onClickLogin = () => {
        setIsLoggedIn(true)
    }
    const onClickLogut = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogut={onClickLogut} />
            <div style={{ padding: 16 }}>이것이 더월드다</div>
        </div>
    )
}
export default LandingPage