import type {GetServerSideProps, NextPage} from 'next'
import axios from "axios";
import global from "../styles/global.module.css";
import NewProducts_component from "../components/UI/Universal/NewProducts";


const Home: NextPage = (props) => {

    return (
        <>
            <main className={`${global.main} ${global.container}`}>
                <NewProducts_component/>
            </main>

        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const {data} = await axios.get('http://localhost:5000/ui')

    return {
        props: {
            el: data
        }
    }
}

export default Home
