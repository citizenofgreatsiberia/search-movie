import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { viteConvertSrc as convertSrc } from '@utils/viteConvertSrc.jsx'

import styles from './SmallPosterFavorites.module.css'

//url for convertSrc
const url = import.meta.url

const SmallPosterFavorites = ({ filmData, setFilms }) => {

    const { nameRu, ratingImdb, filmId, posterUrl } = filmData
    const convertedUrl = convertSrc(posterUrl, url)

    const [exist, setExist] = useState(true)
    const [deleted, setDeleted] = useState(false)

    const navigate = useNavigate()

    const openFilmPage = () => {
        navigate(`/films/${filmId}`, { state: { filmId } })
    }

    useEffect(() => {
        if (deleted) {
            const storageData = JSON.parse(localStorage.searchMovie)
            delete storageData[filmId]

            const result = JSON.stringify(storageData)

            localStorage.removeItem('searchMovie')
            localStorage.setItem('searchMovie', result)

            setExist(false)
            setFilms(Object.values(storageData))
        }

    }, [deleted])

    if (exist) {
        return (
            <div className={styles.wrapper}>
                <div onClick={openFilmPage} className={styles.picWrapper}>
                    {ratingImdb ? <p className={styles.rating}>IMDb: {ratingImdb}</p> : null}
                    <img className={styles.img} src={convertedUrl} alt="img" />
                </div>
                <button onClick={() => setDeleted(true)} className={styles.button}>Удалить</button>
                <div className={styles.description}>
                    <p className={styles.name}>{nameRu}</p>
                </div>
            </div>
        )
    }
}

export default SmallPosterFavorites