import {GetServerSideProps} from "next";
import {wrapper} from "../../../redux/store";
import AdminNavbar from "../../../components/UI/Navbars/AdminNavbar";
import {useAppDispatch} from "../../../redux/hooks";
import {useRouter} from "next/router";
import {Api} from "../../../api/base";
import styles from "../style.module.css";

export default function Tool() {
    const dispatch = useAppDispatch()

    const { asPath, route, query } = useRouter()

    return <>
        <div style={{display: 'flex'}}>
            <AdminNavbar />
            <div className={styles.main}>
                <h1>{query.tool} {query?.type} {query?.auth}</h1>
            </div>
        </div>
    </>
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ctx => {
    const payload = {
        props: {

        },
        redirect: {
            permanent: false,
            destination: "/admin/access-denied"
        }
    }

    try {
        const {userData} = await Api(ctx).user.GetMe()
        if (userData.email != "i.vanya.kolupaev@icloud.com") {
            return payload
        }
    } catch (e) {
        return payload
    }


    return {
        props: {

        },
    };
})
