import AdminNavbar from "../../../components/UI/Navbars/AdminNavbar";
import {GetServerSideProps} from "next";
import {wrapper} from "../../../redux/store";
import {Api} from "../../../api/base";
import {useAppSelector} from "../../../redux/hooks";
import {selectUserData} from "../../../redux/slices/user";
import styles from '../style.module.css'
import {useState} from "react";

export default function Profile() {
    const user:any = useAppSelector(selectUserData).data

    const DATE = new Date()

    const today = `${DATE.getDate()}.${DATE.getMonth() + 1}.${DATE.getFullYear()}`

    const [messages, setMessages] = useState([
        {
            author: 'Колупаева Анастасия',
            text: 'Привет, как дела?)',
            status: 'new',
            date: '18.12.2022'
        },
        {
            author: 'Колупаева Анастасия',
            text: 'Привет, как дела?)',
            status: 'new',
            date: '18.12.2022'
        },
        {
            author: 'Колупаева Анастасия',
            text: 'Привет, как дела?)',
            status: 'new',
            date: '18.12.2022'
        },
        {
            author: 'Колупаева Анастасия',
            text: 'Привет, как дела?)',
            status: 'new',
            date: '18.12.2022'
        },
        {
            author: 'Колупаева Анастасия',
            text: 'Привет, как дела?)',
            status: 'new',
            date: '18.12.2022'
        },
        {
            author: 'Колупаева Анастасия',
            text: 'Привет, как дела?)',
            status: 'new',
            date: '18.12.2022'
        },
        {
            author: 'Колупаева Анастасия',
            text: 'Привет, как дела?)',
            status: 'new',
            date: '18.12.2022'
        },
        {
            author: 'Колупаева Анастасия',
            text: 'Привет, как дела?)',
            status: 'new',
            date: '18.12.2022'
        },
        {
            author: 'Колупаева Анастасия',
            text: 'Привет, как дела?)',
            status: 'new',
            date: '18.12.2022'
        },
        {
            author: 'Колупаева Анастасия',
            text: 'Привет, как дела?)',
            status: 'new',
            date: '18.12.2022'
        },
        {
            author: 'Колупаева Анастасия',
            text: 'Привет, как дела?)',
            status: 'new',
            date: '18.12.2022'
        },
    ])

    function view(index: number) {
        setMessages(messages.map((obj, i)=>{
            if (index == i) {
                obj.status = 'view'
            }

            return obj
        }))
    }

    return <>
        <div style={{display: 'flex'}}>
            <AdminNavbar />
            <div className={styles.main}>
                <div className={styles.messenger}>
                    <div className={styles.profileField}>
                        <img className={styles.profileFieldAvatar} src={`https://foswear.ru/_api/store-manager/avatar/get/${user?.email}`} alt=""/>
                        <div className={styles.profileFieldData}>
                            <p className={styles.profileFieldDataName}>{user.surname} {user.name}</p>
                            <p className={styles.profileFieldDataDateOfBirth}>{user.dateOfBirth || "26.07.2005"}</p>
                            <p className={styles.profileFieldDataJobTitle}>{user.jobTitle || "Ген-директор"}</p>
                        </div>
                    </div>
                    <div className={styles.messengerBox}>
                        {messages?.map((message, index) => {
                            return (
                                <div onClick={() => view(index)} className={styles.message} key={index}>
                                    {message.status == "new" && (
                                        <div className={styles.messageAlert}>

                                        </div>
                                    )}
                                    <img className={styles.messageAvatar} src={`https://foswear.ru/_api/store-manager/avatar/get/${user?.email}`} alt=""/>
                                    <div className={styles.messageData}>
                                        <p className={styles.messageAuthor}>{message.author}</p>
                                        <p className={styles.messageText}>{message.text}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
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