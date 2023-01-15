import Head from "next/head"
import { useRouter } from "next/router"
import global from "../../../styles/global.module.css"

function DynamicInfoPage(props: any) {
    const router = useRouter()

    return (
        <>
            <Head>
                <title>info</title>
            </Head>
            <main className={`${global.main} ${global.container}`}>
                <h1>
                    hello
                </h1>
                <h2>
                    {router.asPath}
                </h2>
            </main>
            
        </>
    )
}

export async function getStaticPaths() {
    return {
      paths: [{ params: { info: 'about' } }, { params: { info: 'agreement' } }, { params: { info: 'delivery' }}, { params: { info: 'payment' } }],
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps(context: any) {
    return {
      props: { post: {} },
    }
  }

export default DynamicInfoPage