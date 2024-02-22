import { useEffect, useState } from "react"

import SelectorsBar from "@components/selectors-bar/SelectorsBar.jsx"
import FilmsList from "@components/films-list/FilmsList.jsx"
import Pagination from "@components/pagination/Pagination.jsx"
// import PreloaderUseEffect from "@components/preloader_use-effect/PreloaderUseEffect.jsx"

import { fetchData } from "@utils/fetchData"
import { scrollToTop } from "@utils/scrollToTop.jsx"

import styles from './CategoriesPage.module.css'

export async function loader() {
    const countries_and_genres = await fetchData(`https://kinopoiskapiunofficial.tech/api/v2.2/films/filters`)
    return { countries_and_genres }
}

const CategoriesPage = () => {

    const [data, setData] = useState({})
    const [apiParams, setApiParams] = useState({})
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        async function getFilms() {
            const res = await fetchData(
                `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL${apiParams?.countries?.id ? '&countries=' + apiParams.countries.id : ''}${apiParams?.genres?.id ? '&genres=' + apiParams.genres.id : ''}${apiParams?.ratingFrom?.item ? '&ratingFrom=' + apiParams.ratingFrom.item : ''}${apiParams?.ratingTo?.item ? '&ratingTo=' + apiParams.ratingTo.item : ''}${apiParams?.yearFrom?.item ? '&yearFrom=' + apiParams.yearFrom.item : ''}${apiParams?.yearTo?.item ? '&yearTo=' + apiParams.yearTo.item : ''}&page=${currentPage}`
            )
            setData(res)
        }
        Object.keys(apiParams).length ? getFilms() : null
    }, [apiParams, currentPage])

    scrollToTop()

    return (
        <div className={styles.wrapper}>
            <SelectorsBar setParams={setApiParams} setCurrentPage={setCurrentPage} />
            <FilmsList films={data.items} />
            {
                Object.keys(data).length
                    ?
                    <Pagination totalPages={data.totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    :
                    null
            }
        </div>
    )
}

export default CategoriesPage
