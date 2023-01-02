import {useAppSelector} from "../../../redux/hooks";
import {selectUserData} from "../../../redux/slices/user";
import styles from "./styles.module.css"
import {Api} from "../../../api/base";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Subheader_component() {

    const {data, isAuth}: any = useAppSelector(selectUserData)
    const {pathname} = useRouter()
    const startWith = pathname.startsWith("/admin")

    return  isAuth && !startWith && data?.email == "i.vanya.kolupaev@icloud.com" ? (
        <>
            <div className={styles.subheader}>
                <div className={styles.bl}>
                    <Link href="/admin"><p>В админ панель: {data?.surname} {data?.name}</p></Link>
                </div>
                <div className={styles.bl}>
                    <p onClick={() => Api().user.Logout()}>Выйти</p>
                </div>
            </div>
        </>
    ) : null
}
