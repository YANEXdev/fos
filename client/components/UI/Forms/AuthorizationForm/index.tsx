import {useState} from "react";

import styles from "./style.module.css"
import MainAlert from "../../Alerts/MainAlert";
import {Api} from "../../../../api/base";
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import {setUserData} from "../../../../redux/slices/user";
import {
    selectUIData,
    setAuthFormMessage,
    setAuthFormRedirect,
    setAuthFormShow,
    setAuthFormType
} from "../../../../redux/slices/ui";
import {useRouter} from "next/router";

export default function AuthorizationForm() {
    const state = useAppSelector(selectUIData)
    const [isLoading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useAppDispatch()

    const router = useRouter();
    const fullpath = router.pathname.split('/')
    const path = fullpath[fullpath.length - 1]

    const login = async () => {
        dispatch(setAuthFormRedirect(''))
        try {
            setLoading(true)
            const {userData}: any = await Api().user.Login({email: email, password: password})
            dispatch(setUserData(userData))
            dispatch(setAuthFormType('success'))
            dispatch(setAuthFormMessage('Успешная авторизация'))
            dispatch(setAuthFormShow(false))
            dispatch(setAuthFormRedirect(""))
            setLoading(false)
            if (state.redirect != "") {
                dispatch(setAuthFormRedirect(''))
                window.location.replace(state.redirect)
            }
            window.location.reload()

        } catch (err: any) {
            dispatch(setAuthFormMessage(err.message))
            dispatch(setAuthFormType('error'))
        }
        setLoading(false)
    }

    if (state.show) {
        return <>
            <div className={styles.box}>
                <div className={styles.form}>
                    <p className={styles.closeBtn} onClick={() => dispatch(setAuthFormShow(false))}>Закрыть</p>
                    {state.message && <MainAlert type={state.error} show={true} message={state.message}/>}
                    <input className={styles.input} type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input className={styles.input} type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button disabled={isLoading} className={styles.sendBtn} onClick={() => login()}>
                        Войти
                    </button>
                </div>
            </div>
        </>
    } else {
        return null
    }

}