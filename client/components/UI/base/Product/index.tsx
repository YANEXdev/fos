import styles from "./styles.module.css"
import Link from "next/link";
import { useRouter } from "next/router";

export default function Product_component() {

    const router = useRouter()

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

    const obj = {
        id: 1,
        title: "Худи XmX",
        price: "2399.00",
        image_url: "https://www.pngarts.com/files/11/Sweatshirt-Hoodie-PNG-Photo.png",
        category: "Худи"
    }


    const {id, title, price, image_url, category} = obj

    return (
        <>
            <div onClick={() => {router.push('/store')}} className={styles.product}>
                <div style={{background: `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.7)`}} className={styles.image}>
                    <img loading="lazy" src={image_url} alt={title} style={{filter: `drop-shadow(19px 28px 20px rgba(0, 0, 0, 0.4)`}} />
                </div>
                <div className={styles.info}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.category}>{category}</p>
                </div>
                <Link href={'/'} className={styles.toProduct}>{price}</Link>

            </div>
        </>
    )
}