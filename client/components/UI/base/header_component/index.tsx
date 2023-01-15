import Link from "next/link";
import styles from "./header.module.css"
import global from "../../../../styles/global.module.css"
import {useEffect, useLayoutEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import {selectUserData} from "../../../../redux/slices/user";
import {setAuthFormMessage, setAuthFormRedirect, setAuthFormShow} from "../../../../redux/slices/ui";
import {useRouter} from "next/router";

export default function Header_component({seo}: any) {
    const {isAuth, data} = useAppSelector(selectUserData)
    const [burger, setBurger] = useState(false)
    const dispatch = useAppDispatch()
    const router = useRouter()
    useEffect(()=> {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 820) {
                setBurger(false)
            }
        })
    }, [])

    const headerData = seo.header

    return (
        <>
            <div className={burger ? `${styles.burger_menu_active} ${styles.burger_menu}` : styles.burger_menu}>
                <Link onClick={() => setBurger(false)} className={styles.burger_menu_link} href="/catalog?gender=men">{headerData.forHim}</Link>
                <Link onClick={() => setBurger(false)} className={styles.burger_menu_link} href="/catalog?gender=woman">{headerData.forHer}</Link>
                <Link onClick={() => setBurger(false)} className={styles.burger_menu_link} href="/catalog?gender=unisex">{headerData.unisex}</Link>
            </div>
            <header style={burger ? {position: "fixed", top: 0, width: "100%"} : {}} className={`${styles.header} ${global.container}`}>
                <div className={styles.burger_container}>
                    <button onClick={() => setBurger(!burger)} className={burger ? `${styles.burger_active} ${styles.burger}` : styles.burger}>
                <div />
                    </button>
                </div>
                <Link onClick={() => setBurger(false)} className={styles.logo_container} href="/">
                    <img className={styles.logo} src={"/logo/logo_form.png"} alt=""/>
                </Link>
                <div className={styles.links}>
                    <Link onClick={() => setBurger(false)} className={styles.link} href="/catalog?gender=men">{headerData.forHim}</Link>
                    <Link onClick={() => setBurger(false)} className={styles.link} href="/catalog?gender=woman">{headerData.forHer}</Link>
                    <Link onClick={() => setBurger(false)} className={styles.link} href="/catalog?gender=unisex">{headerData.unisex}</Link>
                </div>
                <div className={styles.tools}>
                    {!isAuth ? (
                        <button className={styles.tool} onClick={() => {
                            dispatch(setAuthFormRedirect(""))
                            dispatch(setAuthFormMessage(""))
                            dispatch(setAuthFormShow(true))
                            setBurger(false)
                        }}>
                            <img className={styles.icon} src="/base/cart.png" alt=""/>
                        </button>
                    ) : (
                        <Link onClick={() => {
                            setBurger(false)}} href="/cart" className={styles.tool}>
                            <img className={styles.icon} src="/base/cart.png" alt=""/>
                        </Link>
                    )}
                    {!isAuth ? (
                        <button className={styles.tool} onClick={() => {
                            dispatch(setAuthFormRedirect(""))
                            dispatch(setAuthFormMessage(""))
                            dispatch(setAuthFormShow(true))
                            setBurger(false)
                        }}>
                            <img className={styles.icon} src="/base/profile.png" alt=""/>
                        </button>
                    ) : <button className={styles.tool} onClick={async () => {
                        setBurger(false)
                        await router.push('/profile')
                    }}>
                        <img className={styles.icon} src="/base/profile.png" alt=""/>
                    </button>}
                </div>
            </header>
        </>
    )
}