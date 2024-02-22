import { useLoaderData } from 'react-router-dom'

import { fetchData } from '@utils/fetchData'
import { scrollToTop } from '@utils/scrollToTop.jsx'

import FilmProfile from '@components/film-profile/FilmProfile.jsx'
import Facts from '@components/facts/Facts.jsx'
import Reviews from '@components/reviews/Reviews.jsx'
import Similar from '@components/similar/Similar.jsx'

import styles from './FilmPage.module.css'

export async function loader({ params }) {
    const filmId = params.film

    const aboutFilm = await fetchData(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`)
    const aboutStuff = await fetchData(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${filmId}`)
    const aboutFacts = await fetchData(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}/facts`)
    const aboutReviews = await fetchData(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}/reviews?page=1&order=DATE_DESC`)
    const aboutSimilar = await fetchData(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}/similars`)

    return { aboutFilm, aboutStuff, aboutFacts, aboutReviews, aboutSimilar }
}

const FilmPage = () => {
    const { aboutFilm, aboutStuff, aboutFacts, aboutReviews, aboutSimilar } = useLoaderData()

    scrollToTop()

    return (
        <div className={styles.wrapper}>
            <FilmProfile aboutFilm={aboutFilm} aboutStuff={aboutStuff} />
            <Facts aboutFacts={aboutFacts} />
            <Similar similar={aboutSimilar} />
            <Reviews reviews={aboutReviews?.items} />
        </div>)
}

export default FilmPage