import type {GetServerSideProps, NextPage} from 'next'
import axios from "axios";
import global from "../styles/global.module.css";
import NewProducts_component from "../components/UI/Universal/NewProducts";
import BaseSlider from '../components/UI/Sliders/BaseSlider';
import LifestyleEmapmles from '../components/UI/Universal/lifestyleExamples';


const Home: NextPage = (props) => {

    return (
        <>
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
