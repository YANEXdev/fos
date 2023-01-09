import Link from "next/link";
import styles from "./footer.module.css"
import global from "../../../../styles/global.module.css"


export default function Footer_component() {

    return (
        <>
            <footer className={`${styles.footer} ${global.container}`}>
                <div className={styles.info_links}>
                    <Link className={styles.info_link} href="/info/about">О компании</Link>
                    <Link className={styles.info_link} href="/info/agreement">Соглашение</Link>
                    <Link className={styles.info_link} href="/info/paymnet">Оплата</Link>
                    <Link className={styles.info_link} href="/info/delivery>Доставка">Доставка</Link>
                </div>
                <Link className={styles.logo_container} href={"/"}>
                    <img className={styles.logo} src={"/logo/logo_text.png"} alt=""/>
                </Link>
                <div className={styles.social_links}>
                    <Link className={styles.info_link} href="https://www.youtube.com/@fos3203">
                        <img src="/social_links/youtube.png" alt=""/>
                    </Link>
                    <Link className={styles.info_link} href="https://instagram.com/fos_ru">
                        <img src="/social_links/instagram.png" alt=""/>
                    </Link>
                    <Link className={styles.info_link} href="https://t.me/+zqcxV21mNNkzNzJi">
                        <img src="/social_links/telegram.png" alt=""/>
                    </Link>
                    <Link className={styles.info_link} href="https://vk.com/foswear">
                        <img src="/social_links/vk.png" alt=""/>
                    </Link>
                    <Link className={styles.info_link} href="/">
                        <img src="/social_links/gmail.png" alt=""/>
                    </Link>
                </div>
            </footer>
        </>
    )
}