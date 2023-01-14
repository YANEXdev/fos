export const SeoApi = (instance: any) => {
    const Get = async () => {
        try {
            const {data} = await instance.get('/seo/get')
            return data
        } catch (err: any) {
            return {
                header: {
                    forHim: "Для него",
                    forHer: "Для неё",
                    unisex: "Унисекс",
                },
                footer: {
                    info: {
                        about: "О нас",
                        agreement: "Соглашение",
                        payment: "Оплата",
                        delivery: "Доставка",
                    },
                    links: {
                        youtube: "https://www.youtube.com/@fos3203",
                        instagram: "https://instagram.com/fos_ru",
                        telegram: "https://t.me/+zqcxV21mNNkzNzJi",
                        vk: "https://vk.com/foswear",
                        mail: "/"
                    },
                },
                page: {
                    indexPage: {
                        title: "FOS",
                    },
                    errorPage: {
                        title: "404"
                    },
                    catalogPage: {
                        title: "Каталог"
                    },
                    cartPage: {
                        title: "Корзина"
                    },
                    profilePage: {
                        title: "Профиль"
                    }
                }
                

              }
        }
    }

    return {Get}
}