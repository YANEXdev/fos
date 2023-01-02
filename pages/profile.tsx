import global from "../styles/global.module.css"
import {GetServerSideProps} from "next";
import {wrapper} from "../redux/store";
import {Api} from "../api/base";

export default function Profile() {
    return (
        <>
            <main className={`${global.main} ${global.container}`}>
                <section>
                    Profile
                </section>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ctx => {
    try {
        const {userData} = await Api(ctx).user.GetMe()
        if (!userData) {
            return {
                props: {

                },
                redirect: {
                    permanent: false,
                    destination: "/"
                }
            };
        }
    } catch (e) {
        return {
            props: {

            },
            redirect: {
                permanent: false,
                destination: "/"
            }
        };
    }


    return {
        props: {

        },
    };
})