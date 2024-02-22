import SmallPosterFavorites from '@components/small-poster_favorites/SmallPosterFavorites.jsx'
import styles from './FilmsListFavorites.module.css'

const FilmsListFavorites = ({ films, setFilms }) => {
    return (
        <div className={styles.wrapper}>
            {
                films.map((film) => film.nameRu ? <SmallPosterFavorites key={film.kinopoiskId ? film.kinopoiskId : film.filmId} filmData={film} setFilms={setFilms} /> : null)
            }
        </div>
    )

}

export default FilmsListFavorites
