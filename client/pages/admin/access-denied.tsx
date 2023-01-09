import {
    selectUIData,
    setAuthFormMessage, setAuthFormRedirect,
    setAuthFormShow,
    setAuthFormType
} from "../../redux/slices/ui";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {useEffect} from "react";
import {GetServerSideProps} from "next";
import {wrapper} from "../../redux/store";
import {useRouter} from "next/router";

export default function AccessDenied() {
    const dispatch = useAppDispatch()
    const state = useAppSelector(selectUIData)
    const router = useRouter()

    useEffect(() => {
        dispatch(setAuthFormShow(true))
        dispatch(setAuthFormMessage('Отказанно в доступе'))
        dispatch(setAuthFormType('error'))
        dispatch(setAuthFormRedirect("/admin"))
        router.push('/')
    }, [])

    return <>

    </>
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ctx => {



    return {
        props: {

        },
    };
})