import {GetServerSideProps} from "next";
import {Api} from "../../api/base";
import {wrapper} from "../../redux/store";
import AdminNavbar from "../../components/UI/Navbars/AdminNavbar";
import styles from "./style.module.css";

export default function Admin() {
    return <>
        <div style={{display: 'flex'}}>
            <AdminNavbar />
            <div className={styles.main}></div>
        </div>
    </>
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ctx => {
    try {
        const {userData} = await Api(ctx).user.GetMe()
        if (userData.email != "i.vanya.kolupaev@icloud.com") {
            return {
                props: {

                },
                redirect: {
                    permanent: false,
                    destination: "/admin/access-denied"
                }
            };
        }
    } catch (e) {
        return {
            props: {

            },
            redirect: {
                permanent: false,
                destination: "/admin/access-denied"
            }
        };
    }


    return {
        props: {

        },
    };
})

