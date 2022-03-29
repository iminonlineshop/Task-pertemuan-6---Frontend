import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__title}>Footer Movie App</h2>
                <p className={styles.footer__author}>Create by Imin</p>
            </footer>
        </div>
    );
}

// Meng Export halaman Home
export default Footer;