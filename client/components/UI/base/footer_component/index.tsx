import Link from "next/link";
import styles from "./footer.module.css"
import global from "../../../../styles/global.module.css"


export default function Footer_component({seo}: any) {
    const data = seo.footer
    return (
        <>
            <footer className={`${styles.footer} ${global.container}`}>
                <div className={styles.info_links}>
                    <Link className={styles.info_link} href="/info/about">{data.info.about}</Link>
                    <Link className={styles.info_link} href="/info/agreement">{data.info.agreement}</Link>
                    <Link className={styles.info_link} href="/info/payment">{data.info.payment}</Link>
                    <Link className={styles.info_link} href="/info/delivery">{data.info.delivery}</Link>
                </div>
                <Link className={styles.logo_container} href={"/"}>
                    <img className={styles.logo} src={"/logo/logo_text.png"} alt=""/>
                </Link>
                <div className={styles.social_links}>
                    <Link className={styles.info_link} href={data.links.youtube}>
                        <img src="/social_links/youtube.png" alt=""/>
                    </Link>
                    <Link className={styles.info_link} href={data.links.instagram}>
                        <img src="/social_links/instagram.png" alt=""/>
                    </Link>
                    <Link className={styles.info_link} href={data.links.telegram}>
                        <img src="/social_links/telegram.png" alt=""/>
                    </Link>
                    <Link className={styles.info_link} href={data.links.vk}>
                        <img src="/social_links/vk.png" alt=""/>
                    </Link>
                    <Link className={styles.info_link} href={data.links.mail}>
                        <img src="/social_links/gmail.png" alt=""/>
                    </Link>
                </div>
            </footer>
        </>
    )
}