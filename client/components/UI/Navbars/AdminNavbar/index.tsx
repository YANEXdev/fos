import styles from "./style.module.css"
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import {selectUserData} from "../../../../redux/slices/user";
import Link from "next/link";
import {Api} from "../../../../api/base";
import {useRouter} from "next/router";

export default function AdminNavbar() {
    const user: any = useAppSelector(selectUserData).data
    const router = useRouter()

    return (
        <>
          <div className={styles.navbar}>
              <div className={styles.navigation}>
                  <button onClick={() => Api().user.Logout()}>
                      <p className={styles.navigationBtnText}>Выйти</p>
                      <img className={styles.navigationBtnIcon} src="/logout.png" alt=""/>
                  </button>
                  <button onClick={()=>router.push('/')}>
                      <p className={styles.navigationBtnText}>На сайт</p>
                      <img className={styles.navigationBtnIcon} src="/www.png" alt=""/>
                  </button>
              </div>
              <div className={styles.profileBox}>
                  <img className={styles.avatar} src={`https://foswear.ru/_api/store-manager/avatar/get/${user?.email}`} alt=""/>
                  <div className={styles.infoBox}>
                      <div className={styles.userData}>
                          <p className={styles.name}>
                              {user?.name} {user?.surname}
                          </p>
                          <p className={styles.jobTitle}>
                              Менеджер
                          </p>
                      </div>
                      <button onClick={() => router.push('/admin/profile')} className={styles.button}>
                          <p className={styles.buttonText}>
                              В профиль
                          </p>
                          <img className={styles.buttonIcon} src={`https://foswear.ru/_api/store-manager/avatar/get/${user?.email}`} alt=""/>
                      </button>
                  </div>
              </div>

              <hr className={styles.hr}/>
              <p className={styles.sectionTitle}>
                  Продажи
              </p>
              <img className={styles.sectionTitleIcon} src="/cart.png" alt=""/>
              <hr className={styles.hr}/>
              <div className={styles.section}>
                  <Link href="/admin/orders" className={styles.sectionSelector}>
                      <p className={styles.sectionSelectorTitle}>
                          Заказы
                      </p>
                      <img className={styles.sectionSelectorIcon} src="/order.png" alt=""/>
                  </Link>
                  <Link href="/admin/products" className={styles.sectionSelector}>
                      <p className={styles.sectionSelectorTitle}>
                          Товары
                      </p>
                      <img className={styles.sectionSelectorIcon} src="/product.png" alt=""/>
                  </Link>
                  <Link href="/admin/stats" className={styles.sectionSelector}>
                      <p className={styles.sectionSelectorTitle}>
                          Статистика
                      </p>
                      <img className={styles.sectionSelectorIcon} src="/statistic.png" alt=""/>
                  </Link>
              </div>
              <hr className={styles.hr}/>
              <p className={styles.sectionTitle}>
                  Пользователи
              </p>
              <img className={styles.sectionTitleIcon} src="/customer.png" alt=""/>
              <hr className={styles.hr}/>
              <div className={styles.section}>
                  <Link href="/admin/users?type=employee" className={styles.sectionSelector}>
                      <p className={styles.sectionSelectorTitle}>
                          Сотрудники
                      </p>
                      <img className={styles.sectionSelectorIcon} src="/user.png" alt=""/>
                  </Link>
                  <Link href="/admin/users?type=blocked" className={styles.sectionSelector}>
                      <p className={styles.sectionSelectorTitle}>
                          Заблокированные
                      </p>
                      <img className={styles.sectionSelectorIcon} src="/block.png" alt=""/>
                  </Link>
                  <Link href="/admin/users?type=clients" className={styles.sectionSelector}>
                      <p className={styles.sectionSelectorTitle}>
                          Клиенты
                      </p>
                      <img className={styles.sectionSelectorIcon} src="/customer.png" alt=""/>
                  </Link>
              </div>
              <hr className={styles.hr}/>
              <p className={styles.sectionTitle}>
                  Настройка
              </p>
              <img className={styles.sectionTitleIcon} src="/setting.png" alt=""/>
              <hr className={styles.hr}/>
              <div className={styles.section}>
                  <Link href="/admin/pages" className={styles.sectionSelector}>
                      <p className={styles.sectionSelectorTitle}>
                          Страницы
                      </p>
                      <img className={styles.sectionSelectorIcon} src="/page.png" alt=""/>
                  </Link>
                  <Link href="/admin/seo" className={styles.sectionSelector}>
                      <p className={styles.sectionSelectorTitle}>
                          SEO
                      </p>
                      <img className={styles.sectionSelectorIcon} src="/seo.png" alt=""/>
                  </Link>
              </div>
          </div>
        </>
    )
}