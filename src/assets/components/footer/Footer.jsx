import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <section className={styles.sections}>
                    <h3 className={styles.title}>Разделы</h3>
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/categories">Категории</NavLink>
                    <NavLink to="/about">О сайте</NavLink>
                    <NavLink className={styles.link} to="/favorites">Избранное</NavLink>
                    <NavLink to="/error">Страница 404</NavLink>
                </section>
                <section className={styles.streamings}>
                    <h3 className={styles.title}>Онлайн сервисы</h3>
                    <a href="https://www.ivi.ru/"><img className={styles.logo} src={new URL('@images/streamings/ivi.png', import.meta.url).href} alt="ivi" /></a>
                    <a href="https://www.kinopoisk.ru/"><img className={styles.logo} src={new URL('@images/streamings/kinopoisk.png', import.meta.url).href} alt="kinopoisk" /></a>
                    <a href="https://okko.tv/"><img className={styles.logo} src={new URL('@images/streamings/okko.png', import.meta.url).href} alt="okko" /></a>
                    <a href="https://premier.one/"><img className={styles.logo} src={new URL('@images/streamings/premier.png', import.meta.url).href} alt="premier" /></a>
                    <a href="https://wink.ru/"><img className={styles.logo} src={new URL('@images/streamings/wink.png', import.meta.url).href} alt="wink" /></a>
                </section>
                <section className={styles.info}>
                    <h3 className={styles.title}>Информация</h3>
                    <a href="https://github.com/citizenofgreatsiberia">Мой GitHub</a>
                </section>
            </div>
            <section className={styles.copyrightWrapper}>
                <p className={styles.copyright}>Copyright 2023 ©Search_movie. Все права защищены</p>
            </section>
        </div>
    )
}

export default Footer