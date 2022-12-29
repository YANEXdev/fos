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
                <div className={styles.logo_container}>
                    <img className={styles.logo} src={"/logo/logo_text.png"} alt=""/>
                </div>
                <div className={styles.social_links}>
                    <Link className={styles.info_link} href="/info/about">
                        <img src="/social_links/youtube.png" alt=""/>
                    </Link>
                    <Link className={styles.info_link} href="/info/about">
                        <img src="/social_links/instagram.png" alt=""/>
                    </Link>
                    <Link className={styles.info_link} href="/info/about">
                        <img src="/social_links/telegram.png" alt=""/>
                    </Link>
                    <Link className={styles.info_link} href="/info/about">
                        <img src="/social_links/vk.png" alt=""/>
                    </Link>
                    <Link className={styles.info_link} href="/info/about">
                        <img src="/social_links/gmail.png" alt=""/>
                    </Link>
                </div>
            </footer>
        </>
    )
}