import Head from "next/head";
import global from "../styles/global.module.css";

export default function Custom404(props: any) {

    console.log(props)
    const errorPage = props.seo.page.errorPage

    return (
        <>
            <Head>
                <title>{errorPage.title}</title>
            </Head>
            <main className={`${global.main} ${global.container}`}>
                <section>
                    <h1 style={{textAlign: "center", fontSize: "200px", verticalAlign: "center", margin: 0, padding: 0}}>404</h1>
                </section>
            </main>
        </>
    )
}