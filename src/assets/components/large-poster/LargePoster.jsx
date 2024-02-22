import { useNavigate } from 'react-router-dom'
import { viteConvertSrc as convertSrc } from '@utils/viteConvertSrc.jsx'
import styles from './LargePoster.module.css'

//url for convertSrc
const url = import.meta.url

const LargePoster = ({ filmData }) => {

    const posterUrl = convertSrc(filmData.posterUrl, url)
    const nameRu = filmData.nameRu
    const genres = filmData.genres.map((item) => `${item.genre} `)
    const premiereRu = filmData.premiereRu
    const filmId = filmData.kinopoiskId

    const navigate = useNavigate()

    const openFilmPage = () => {
        navigate(`/films/${filmId}`, { state: { filmId } })
    }

    const convertedReleaseDate = premiereRu.split('-').reverse().join('.')

    return (
        <section onClick={openFilmPage} className={styles.wrapper}>
            <div>
                <img className={styles.img} src={posterUrl} alt="img" />
                <div className={styles.description}>
                    <div className={styles.titleWrapper}>
                        <h2 className={styles.title}>{nameRu}</h2>
                        <p className={styles.genres}>{genres}</p>
                    </div>
                    <p className={styles.releaseDate} >Дата выхода: {convertedReleaseDate}</p>
                </div>
            </div>
        </section>
    )
}

export default LargePoster