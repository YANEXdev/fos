import { useState } from "react"
import { Api } from "../api/base"

export function useFetchApi() {
    const [loading, setLoading] = useState(false)

    const Get = async (url: string) => {
        try {
            setLoading(true)
            const {data} = await Api().Instance.get(url)
            setTimeout(() => {
                setLoading(false)
                return data
            }, 3000)
        
        } catch (err: any) {
            setLoading(false)
            throw new Error(err.response.data.message)
        }
    }

    return {Get, loading}
}