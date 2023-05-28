import React from "react";
import styles from "./scss/libs/wrapper.module.scss";
import Header from "./components/header/header";
import Main from "./components/main/main";
// import Footer from "./components/footer/footer";

function App() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Main />
        </div>
    );
}

export default App;
