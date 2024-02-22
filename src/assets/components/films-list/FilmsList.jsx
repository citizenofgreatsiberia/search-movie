import SmallPoster from '@components/small-poster/SmallPoster'
import styles from './FilmsList.module.css'

const FilmsList = ({ films }) => {

    return (
        <div className={styles.wrapper}>
            {
                films?.map((film) => film.nameRu ? <SmallPoster key={film.kinopoiskId ? film.kinopoiskId : film.filmId} filmData={film} /> : null)
            }
        </div>
    )

}

export default FilmsList
