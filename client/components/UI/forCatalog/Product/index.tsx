import { useRouter } from "next/router"
import styles from "./styles.module.css"
import Link from "next/link"

export default function CatalogProduct_component({fetching = false, data = {}}: any) {
    function shuffle(array: Array<number>) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    function simpleColor() {
        const min = 90

        const f = 255
        const s = min
        const t = min + (Math.random() * (230 - min))

        let arr = shuffle([f, s, t])
        arr = shuffle(arr)

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
                <div onClick={() => {router.push(`/product/${id}`)}} className={styles.product}>
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