import styles from './Streamings.module.css'

const Streamings = () => {
    return (
        <section className={styles.wrapper}>
            <h3 className={styles.title}>Смотри фильмы на любимых площадках</h3>
            <div className={styles.logos}>
                <a href="https://www.ivi.ru/"><img className={styles.logo} src={new URL("@images/streamings/ivi.png", import.meta.url).href} alt="ivi" /></a>
                <a href="https://www.kinopoisk.ru/"><img className={styles.logo} src={new URL("@images/streamings/kinopoisk.png", import.meta.url).href}
                    alt="kinopoisk" /></a>
                <a href="https://okko.tv/"><img className={styles.logo} src={new URL("@images/streamings/okko.png", import.meta.url).href}
                    alt="okko" /></a>
                <a href="https://premier.one/"><img className={styles.logo} src={new URL("@images/streamings/premier.png", import.meta.url).href}
                    alt="premier" /></a>
                <a href="https://wink.ru/"><img className={styles.logo} src={new URL("@images/streamings/wink.png", import.meta.url).href}
                    alt="wink" /></a>
            </div>
        </section>

    )
}

export default Streamings
