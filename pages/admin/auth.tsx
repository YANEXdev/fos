import {GetServerSideProps} from "next";
import {Api} from "../../api/base";
import {useAppDispatch} from "../../redux/hooks";
import {setAuthFormShow} from "../../redux/slices/ui";

export default function Auth() {
    const dispatch = useAppDispatch()
    dispatch(setAuthFormShow(true))
    return (
        <>

        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
    try {
        const {userData} = await Api(ctx).user.GetMe()
        if (userData.email != "i.vanya.kolupaev@icloud.com") {
            ctx.res.writeHead(302, { Location: '/admin/access-denied' });
            ctx.res.end();
        }
    } catch (e) {
        ctx.res.writeHead(302, { Location: '/admin/access-denied' });
        ctx.res.end();
    }

    return {
        props: {

        }
    }
}