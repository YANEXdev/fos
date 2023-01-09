import { useRouter } from "next/router"
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.css"

export default function BaseSlider() {
    const [slide, setSlide] = useState(0)
    const router = useRouter()

    const route = async (to: string) => await router.push(to);

    const sliderRef = useRef<HTMLDivElement>(null)

    const goToSlide = () => {
        if (sliderRef && sliderRef.current && sliderRef.current.clientHeight) {
            sliderRef.current.scrollLeft = slide * sliderRef.current.clientWidth   
        }
    }

    setTimeout(() => {
        if (sliderRef && sliderRef.current && sliderRef.current.clientHeight) {
            if (sliderRef.current.childElementCount - 1 <= slide) {
                setSlide(0)
            } else {
                setSlide(slide + 1)
            }
        }
    }, 6000)

    useEffect(() => {
        goToSlide()
    }, [slide])

    return (
        <>
            <div ref={sliderRef} className={styles.base}>
                <section className={styles.banner}>
                    <img src="" alt="" />
                </section>
                <section className={styles.banner}>
                    <img src="" alt="" />
                </section>
                <section className={styles.banner}>
                    <img src="" alt="" />
                </section>
                <section className={styles.banner}>
                    <img src="" alt="" />
                </section>
                <section className={styles.banner}>
                    <img src="" alt="" />
                </section>
                <section className={styles.banner}>
                    <img src="" alt="" />
                </section>
                <section className={styles.banner}>
                    <img src="" alt="" />
                </section>
                <section className={styles.banner}>
                    <img src="" alt="" />
                </section>
            </div>
        </>
    )
}