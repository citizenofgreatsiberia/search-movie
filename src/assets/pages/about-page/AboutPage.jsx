import { NavLink } from 'react-router-dom'
import { scrollToTop } from '@utils/scrollToTop.jsx'
import styles from './AboutPage.module.css'

const AboutPage = () => {

    scrollToTop()

    return (
        <section className={styles.wrapper}>
            <h3 className={styles.title}>О сайте</h3>
            <p className={styles.text}>Search_movie является некоммерческим проектом <a href="https://github.com/citizenofgreatsiberia">Sergey Kostyukevich</a></p>
            <p className={styles.text}>При разработке были использованы:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><a href="https://react.dev/">React</a></li>
                <li className={styles.listItem}><a href="https://reactrouter.com/en/main">react-router-dom</a></li>
                <li className={styles.listItem}><a href="https://kinopoiskapiunofficial.tech/">Kinopoisk API Unofficial</a></li>
                <li className={styles.listItem}><a href="https://swiperjs.com/">Swiper</a></li>
                <li className={styles.listItem}><a href="https://vitejs.dev/">Vite</a></li>
            </ul>
            <NavLink className={styles.home} to="/">Вернуться на главную страницу</NavLink>
        </section>
    )
}

export default AboutPage