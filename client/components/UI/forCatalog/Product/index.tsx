import { useRouter } from "next/router"
import styles from "./styles.module.css"
import Link from "next/link"

export default function CatalogProduct_component({fetching = false, data = {}}: any) {
    function shuffle(array: Array<number>) {
        return array.sort(() => Math.random() - 0.5);
    }

    function simpleColor() {
        let f = 255
        let s = Math.random() * (255 - 125) + 125
        let t = 125

        let arr = shuffle([f, s, t])

        return arr
    }

    const color = simpleColor()

    const router = useRouter()

    if (fetching || !data.id) {
        return (
            <>
                <div className={styles.product}>
                    <div className={styles.image_loader}>
                        
                    </div>
                    <div className={styles.info}>
                        <h2 className={styles.title}>Загрузка...</h2>
                        <p className={styles.category}>Загрузка...</p>
                    </div>
                    <Link href="" className={styles.toProduct_loader}>Загрузка...</Link>

                </div>
            </>
        )
    } else {
        const {id, title, price, image_url, category} = data
        return (
            <>
                <div onClick={() => {router.push('/store')}} className={styles.product}>
                    <div style={{background: `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.7)`}} className={styles.image}>
                        <img loading="lazy" src={image_url} alt={title} style={{filter: `drop-shadow(19px 28px 20px rgba(0, 0, 0, 0.4)`}} />
                    </div>
                    <div className={styles.info}>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.category}>{category[1]}</p>
                    </div>
                    <Link href={'/'} className={styles.toProduct}>{price}</Link>

                </div>
            </>
        )
    }
}