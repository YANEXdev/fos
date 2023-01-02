import global from "../styles/global.module.css";

export default function Custom404() {
    return (
        <>
            <main className={`${global.main} ${global.container}`}>
                <section>
                    <h1 style={{textAlign: "center", fontSize: "200px", verticalAlign: "center", margin: 0, padding: 0}}>404</h1>
                </section>
            </main>
        </>
    )
}