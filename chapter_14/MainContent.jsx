import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            padding: "1.5rem",
            backgroundColor: theme == "light" ? "white" : "black",
            color: theme == "light" ? "black" : "white",
        }}>
            <p>색을 바꾸는 스탠드다.</p>
            <button onClick={toggleTheme}>스탠드 파워 전개!</button>
        </div>
    )
}
export default MainContent