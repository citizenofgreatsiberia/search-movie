import { useLoaderData } from "react-router-dom"
import { useState } from "react"

import SearchBar from "@components/search-bar/SearchBar.jsx"
import FilmsList from "@components/films-list/FilmsList.jsx"

import { fetchData } from "@utils/fetchData"
import { scrollToTop } from "@utils/scrollToTop.jsx"

import styles from './SearchPage.module.css'

export async function loader({ params }) {
    if (params.name) {
        const data = await fetchData(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${params.name}&page=1`)
        return { data }
    } else {
        const data = 'blank-search-page'
        return { data }
    }
}

const SearchPage = () => {

    scrollToTop()

    const { data } = useLoaderData()
    const [keyWord, setKeyWord] = useState('')

    const setSearchParam = (word) => {
        setKeyWord(word)
    }

    return (
        <div className={styles.wrapper}>
            <SearchBar setSearchParam={setSearchParam} keyWord={keyWord} />
            {
                data === 'blank-search-page' ?
                    null
                    :
                    data.films.length ?
                        <>
                            <FilmsList films={data.films} />
                        </>
                        :
                        <>
                            <div className={styles.notice_wrapper}>
                                <h3 className={styles.firstTitle}>Ничего не найдено</h3>
                                <h4 className={styles.secondTitle}>Попробуйте еще раз</h4>
                            </div>
                        </>
            }
        </div>
    )
}

export default SearchPage