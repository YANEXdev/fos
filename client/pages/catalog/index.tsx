import CatalogProduct_component from "../../components/UI/forCatalog/Product"
import global from "../../styles/global.module.css"
import styles from "./styles.module.css"

export default function Catalog() {
    return (
        <>
            <main className={`${global.main} ${global.container} ${styles.main}`}>
                <section className={styles.filters}>
                    <h2 className={styles.paramTitle}>
                        Тип
                    </h2>
                    <div className={styles.params}>
                        <div className={styles.typeSelection}>
                            <h2>
                                Худи
                            </h2>
                        </div>
                        <div className={styles.typeSelection}>
                            <h2>
                                Футболки
                            </h2>
                        </div>
                        <div className={styles.typeSelection}>
                            <h2>
                                Брюки
                            </h2>
                        </div>
                        <div className={styles.typeSelection}>
                            <h2>
                                Шорты
                            </h2>
                            <h2>
                                Носки
                            </h2>
                        </div>
                    </div>
                </section>
                <section className={styles.catalog}>
                    <div style={{display: "flex", alignItems: "center", justifyContent: 'space-between'}}>
                        <h1 className={styles.catalogTitle}>
                            Худи
                        </h1>
                        <div>
                            <button>Фильтры</button>
                            <select name="" id="">
                                <option>Новизна</option>
                                <option>Популярность</option>
                                <option>Цена: по убыванию</option>
                                <option>Цена: по возрастанию</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.productList}>
                        <CatalogProduct_component fetching={false} data={{id: 12, title: "Entry", price: "1299.00", image_url: "https://www.pngarts.com/files/11/Sweatshirt-Hoodie-PNG-Photo.png", category: ['hoodies', 'Худи']}}/>
                        <CatalogProduct_component fetching={false} data={{id: 12, title: "Entry", price: "1299.00", image_url: "https://www.pngarts.com/files/11/Sweatshirt-Hoodie-PNG-Photo.png", category: ['hoodies', 'Худи']}}/>
                        <CatalogProduct_component fetching={false} data={{id: 12, title: "Entry", price: "1299.00", image_url: "https://www.pngarts.com/files/11/Sweatshirt-Hoodie-PNG-Photo.png", category: ['hoodies', 'Худи']}}/>
                        <CatalogProduct_component fetching={true} data={{id: 12, title: "Entry", price: "1299.00", image_url: "https://www.pngarts.com/files/11/Sweatshirt-Hoodie-PNG-Photo.png", category: ['hoodies', 'Худи']}}/>
                        <CatalogProduct_component fetching={true} data={{id: 12, title: "Entry", price: "1299.00", image_url: "https://www.pngarts.com/files/11/Sweatshirt-Hoodie-PNG-Photo.png", category: ['hoodies', 'Худи']}}/>
                        <CatalogProduct_component fetching={true} data={{id: 12, title: "Entry", price: "1299.00", image_url: "https://www.pngarts.com/files/11/Sweatshirt-Hoodie-PNG-Photo.png", category: ['hoodies', 'Худи']}}/>
                        <CatalogProduct_component fetching={true} data={{id: 12, title: "Entry", price: "1299.00", image_url: "https://www.pngarts.com/files/11/Sweatshirt-Hoodie-PNG-Photo.png", category: ['hoodies', 'Худи']}}/>
                        <CatalogProduct_component fetching={true} data={{id: 12, title: "Entry", price: "1299.00", image_url: "https://www.pngarts.com/files/11/Sweatshirt-Hoodie-PNG-Photo.png", category: ['hoodies', 'Худи']}}/>
                    </div>
                </section>
            </main>
        </>
    )
}