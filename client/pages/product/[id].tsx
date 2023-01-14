import { GetServerSideProps } from "next"
import global from "../../styles/global.module.css"

export default function ProductPage(props: any) {
    const {seo} = props
    return (
        <>
            <main className={`${global.main} ${global.container}`}>
                <h1>
                    {seo.h1}
                </h1>
            </main>
        </>
    )
}