import React from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginRight: 8,
    },
}

function Toolbar(props) {
    const { isLoggedIn, onClickLogin, onClickLogut } = props
    return (
        <div style={styles.wrapper}>
            {isLoggedIn && <span style={styles.greeting}>어서와라 남자의 세계에</span>}
            {isLoggedIn ? (<button onClick={onClickLogut}>안녕을 말하는 나야</button>) : (<button onClick={onClickLogin}>돌입한다!</button>)}
        </div>
    )
}
export default Toolbar