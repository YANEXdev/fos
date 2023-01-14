import type {GetServerSideProps, NextPage} from 'next'
import global from "../styles/global.module.css";
import NewProducts_component from "../components/UI/Universal/NewProducts";
import BaseSlider from '../components/UI/Sliders/BaseSlider';
import LifestyleEmapmles from '../components/UI/Universal/lifestyleExamples';
import Head from 'next/head';


const Home: NextPage = (props: any) => {
    const indexPage = props.seo.page.indexPage
    return (
        <>
            <Head>
                <title>
                    {indexPage.title}
                </title>
            </Head>
            <main className={`${global.main} ${global.container}`}>
                <BaseSlider />
                <NewProducts_component />
                <LifestyleEmapmles />
            </main>

        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    return {
        props: {
            
        }
    }
}

export default Home
