import { setCookie } from "nookies"

export const UserApi = (instance: any) => {
    const Login = async (dto: any) => {
        try {
            const {data} = await instance.post('/auth/login', dto)
            setCookie(null, "token", data.token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
            return data
        } catch (err: any) {
            throw new Error(err.response.data.message)
        }
    }

    const Logout = () => {
        document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`
        window.location.reload()
    }

    const GetMe = async () => {
        try {
            const {data} = await instance.get('user/getMyData')
            return data
        } catch (err: any) {
            throw new Error(err.response.data.message)
        }
    }

    return {Login, Logout, GetMe}
}