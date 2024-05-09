import { useEffect } from 'react';
import styles from './Player.module.css'

const Player = ({ filmId }) => {
    const scriptSrc = "https://kinobox.tv/kinobox.min.js"

    useEffect(() => {
        const kinobox = document.createElement('script')
        kinobox.src = scriptSrc
        kinobox.async = true
        document.body.appendChild(kinobox);
        const kinoboksParams = document.createElement('script')
        kinoboksParams.innerText = `{kbox('.kinobox_player', { search: { kinopoisk: ${filmId} } })}`
        kinoboksParams.async = true
        document.body.appendChild(kinoboksParams)
        return () => {
            document.body.removeChild(kinobox)
            document.body.removeChild(kinoboksParams)
        };
    }, [filmId]);

    return (
        <section className={styles.wrapper}>
            <div class="kinobox_player" ></div>
        </section>
    )
}

export default Player
