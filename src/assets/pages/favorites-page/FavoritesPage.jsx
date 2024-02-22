import { useEffect, useState } from 'react'
import FilmsListFavorites from '@components/films-list_favorites/FilmsListFavorites.jsx'
import { scrollToTop } from '@utils/scrollToTop.jsx'
import styles from './FavoritesPage.module.css'


const FavoritesPage = () => {

    const [films, setFilms] = useState([])

    useEffect(() => {
        let storageData =
            localStorage.searchMovie
                ?
                JSON.parse(localStorage.searchMovie)
                :
                {}
        setFilms(Object.values(storageData))
    }, [])

    scrollToTop()

    return (
        films.length
            ?
            (
                <section>
                    <FilmsListFavorites films={films} setFilms={setFilms} />
                </section >
            )
            :
            (
                <section className={styles.textWrapper}>
                    <div className={styles.nothing}>Список избранного пуст</div>
                </section>
            )
    )
}

export default FavoritesPage