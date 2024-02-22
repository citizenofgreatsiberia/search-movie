import AddToFavorites from '@components/add-to-favorites/AddToFavorites.jsx'
import LinkButton from '@components/link-button/LinkButton.jsx'
import styles from './FilmProfile.module.css'

const FilmProfile = ({ aboutFilm, aboutStuff }) => {

    return (
        <section className={styles.wrapper}>
            <div style={{ width: "65vw", minWidth: '350px', borderRadius: '10px' }}>
                <div className={styles.aboutFilm}>
                    <div className={styles.poster_wrapper}>
                        <div className={styles.poster_min_size}>
                            <img src={aboutFilm.posterUrl} alt="poster" className={styles.poster} />
                            {
                                aboutFilm.ratingImdb ?
                                    <p className={styles.rating}>IMDb: {aboutFilm.ratingImdb}</p>
                                    : null
                            }
                            <h2 className={styles.first_title}>{aboutFilm.nameRu} ({aboutFilm.year})</h2>
                            {
                                aboutFilm.nameOriginal ?
                                    <h3 className={styles.second_title}>{aboutFilm.nameOriginal}</h3>
                                    : null
                            }
                        </div>

                        <AddToFavorites aboutFilm={aboutFilm} />
                    </div>

                    <div className={styles.info}>
                        {aboutFilm.year ? <p className={styles.text}>Год: {aboutFilm.year}</p> : null}
                        {aboutStuff.length ? <p className={styles.text}>Режиссер: <LinkButton path={`/person/${aboutStuff[0].staffId}`}>{aboutStuff[0].nameRu}</LinkButton></p> : null}
                        {aboutFilm.slogan ? <p className={styles.text}>Слоган: {aboutFilm.slogan}</p> : null}
                        {aboutFilm?.countries ? <p className={styles.text}>Страна: <br />{aboutFilm.countries.map((country) => <LinkButton path='/categories' key={country.country}> {country.country} </LinkButton>)}</p> : null}
                        {aboutFilm?.genres ? <p className={styles.text}>Жанр: <br /> {aboutFilm.genres.map((genre) => <LinkButton path='/categories' key={genre.genre}> {genre.genre}</LinkButton>)}</p> : null}
                        {aboutFilm.ratingKinopoisk ? <p className={styles.text}>Рейтинг Кинопоиск: {aboutFilm.ratingKinopoisk}</p> : null}
                        {aboutFilm.ratingImdb ? <p className={styles.text}>Рейтинг IMDb: {aboutFilm.ratingImdb}</p> : null}
                        {aboutFilm.filmLength ? <p className={styles.text}>Продолжительность: {aboutFilm.filmLength} мин.</p> : null}
                        {
                            aboutFilm.description ?
                                <div className={styles.description_wrapper}>
                                    <p className={styles.description_title}>Описание:</p>
                                    <p className={styles.description}>{aboutFilm.description}</p>
                                </div>
                                : null
                        }
                    </div>
                </div>
            </div>

            <div className={styles.roles}>
                {aboutStuff ?
                    <div> <p className={styles.text}>В ролях: </p>
                        <div className={styles.actors}>
                            {
                                aboutStuff.map((el, index) => {
                                    if (el.nameRu === '') return
                                    if (index > 0 && index < 10) {
                                        return <LinkButton path={`/person/${el.staffId}`} key={`${el.staffId}+${index}`} > {el.nameRu}, </LinkButton>
                                    } else if (index == 10) {
                                        return <div key={`${el.stuffId}+${index}`}><LinkButton >{el.nameRu}</LinkButton> <span>и др.</span></div>
                                    }
                                })
                            }
                        </div>
                    </div>
                    :
                    null}
            </div>

        </section>
    )
}

export default FilmProfile