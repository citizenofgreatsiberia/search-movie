import { useState, useEffect } from 'react'
import styles from './AddToFavorites.module.css'

const AddToFavorites = ({ aboutFilm }) => {

    const [storage, setStorage] = useState({})
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        let films = {}
        if (localStorage.searchMovie) {
            films = JSON.parse(localStorage.searchMovie)
        }
        setStorage(films)
    }, [clicked])

    const filmId = aboutFilm.kinopoiskId
    class Film {
        constructor(aboutFilm) {
            this.filmId = aboutFilm.kinopoiskId
            this.nameRu = aboutFilm.nameRu
            this.nameOriginal = aboutFilm.nameOriginal
            this.year = aboutFilm.year
            this.posterUrl = aboutFilm.posterUrl
            this.ratingImdb = aboutFilm.ratingImdb
        }
    }

    const addToFavorites = () => {
        const film = new Film(aboutFilm)
        let films = null
        if (localStorage.searchMovie) {
            const storageData = JSON.parse(localStorage.searchMovie)
            films = {
                ...storageData,
                [filmId]: film,
            }
        } else {
            films = {
                [filmId]: film,
            }
        }
        const result = JSON.stringify(films)
        localStorage.setItem('searchMovie', result)
        setClicked(!clicked)
    }

    const deleteFromFavorites = () => {
        if (localStorage.searchMovie) {
            const storageData = JSON.parse(localStorage.searchMovie)
            delete storageData[filmId]
            const result = JSON.stringify(storageData)
            localStorage.removeItem('searchMovie')
            localStorage.setItem('searchMovie', result)
        }
        setClicked(!clicked)
    }

    return (
        <div className={styles.wrapper}>
            {
                storage[filmId]
                    ?
                    <button onClick={deleteFromFavorites} className={styles.deleteButton}>Удалить из избранного</button>
                    :
                    <button onClick={addToFavorites} className={styles.addButton}>Добавить в избранное</button>
            }
        </div>
    )
}

export default AddToFavorites