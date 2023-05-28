import React from "react";
import styles from "./header.module.scss";
import logo from "../../../App/assets/header/logo.svg";
import icon from "../../../App/assets/header/icon.svg";
import avatar from "../../../App/assets/header/avatar.png";

const Header = () => {
    return (
        <>
            <header className={styles.headerWrapper}>
                <div className={styles.header}>
                    <div className={styles.headerLogo}>
                        <a className={styles.headerLogoLink} href="#">
                            <img src={logo} alt="Logo" />
                        </a>

                        <div className={styles.headerLogoText} href="#">
                            <span>Проект </span>
                        </div>
                    </div>
                    <div className={styles.headerUser}>
                        <div className={styles.headerUserIcon}>
                            <img src={icon} alt="icon" />
                        </div>
                        <div className={styles.headerUserInfo}>
                            <div className={styles.headerUserAvatar}>
                                <img src={avatar} alt="avatar" />
                            </div>
                            <div className={styles.headerUserText}>
                                <span>Иванов В. А.</span>
                                <span>Должность</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
