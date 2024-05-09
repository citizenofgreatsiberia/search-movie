import { useEffect } from 'react'
import styles from './Player.module.css'

const Player = ({ filmId }) => {

    useEffect(() => {
        const kinoboksParams = document.createElement('script')
        kinoboksParams.innerText = `{kbox('.kinobox_player', { search: { kinopoisk: ${filmId} } })}`
        kinoboksParams.async = true
        document.body.appendChild(kinoboksParams)
        return () => {
            document.body.removeChild(kinoboksParams)
        }
    }, [filmId])

    return (
        <section className={styles.wrapper}>
            <div class="kinobox_player" ></div>
        </section>
    )
}

export default Player
