import { NavLink } from 'react-router-dom'
import { viteConvertSrc as convertSrc } from '@utils/viteConvertSrc.jsx'

import styles from './SmallPoster.module.css'

//url for convertSrc
const url = import.meta.url

const SmallPoster = ({ filmData }) => {
    const { nameRu, ratingImdb, kinopoiskId, posterUrl } = filmData
    const filmId = filmData.filmId ? filmData.filmId : filmData.kinopoiskId
    const convertedPosterUrl = convertSrc(posterUrl, url)

    return (
        <div className={styles.wrapper}>
            <NavLink to={`/films/${filmId}`}>
                <div className={styles.picWrapper}>
                    {ratingImdb ? <p className={styles.rating}>IMDb: {ratingImdb}</p> : null}
                    <img className={styles.img} src={convertedPosterUrl} alt="img" />
                </div>
            </NavLink>
            <div className={styles.description}>
                <p className={styles.name}>{nameRu}</p>
            </div>
        </div>
    )
}

export default SmallPoster