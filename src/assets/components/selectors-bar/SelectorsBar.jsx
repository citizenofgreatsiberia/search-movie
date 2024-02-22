import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Selector from '@components/selector/Selector.jsx'

import styles from './SelectorsBar.module.css'

const SelectorsBar = ({ setParams, setCurrentPage }) => {
    const [filters, setFilters] = useState({})
    const [clickedSelector, setClickedSelector] = useState(false)

    const { countries_and_genres } = useLoaderData()

    const countries = countries_and_genres.countries.filter((el, index) => index < 50).map((el) => el.country)
    const genres = countries_and_genres.genres.filter((el, index) => index < 24).map((el) => el.genre)
    const rating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const getDates = () => {
        const currentDate = new Date().getFullYear()
        const dates = []
        for (let i = currentDate; i >= 1900; i--) {
            dates.push(i);
        }
        return dates
    }

    const addFilter = (filters, item, selectorName, id) => {
        if (selectorName !== 'genres' || selectorName !== 'countries') { id += 1 }
        const elements = {
            ...filters
        }
        if (item) {
            setFilters({
                ...elements,
                [selectorName]: { item, id }
            })
        } else {
            delete elements[selectorName]
            setFilters({
                ...elements
            })
        }
    }

    const submit = (filters, currentPage) => {
        setParams(filters)
        setCurrentPage(currentPage)
    }

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Фильтры</h2>
            <div className={styles.selectors_wrapper}>
                <Selector selectorName='genres' bind={false} setClickedSelector={setClickedSelector} clickedSelector={clickedSelector} name='Жанр' items={genres} addFilter={addFilter} filters={filters} />
                <Selector selectorName='countries' bind={false} setClickedSelector={setClickedSelector} clickedSelector={clickedSelector} name='Страна' items={countries} addFilter={addFilter} filters={filters} />
                <Selector selectorName='yearFrom' bind={{ bindName: 'yearTo', isMajor: false }} setClickedSelector={setClickedSelector} clickedSelector={clickedSelector} name='Снят после' items={getDates()} addFilter={addFilter} filters={filters} />
                <Selector selectorName='yearTo' bind={{ bindName: 'yearFrom', isMajor: true }} setClickedSelector={setClickedSelector} clickedSelector={clickedSelector} name='Снят до' items={getDates()} addFilter={addFilter} filters={filters} />
                <Selector selectorName='ratingFrom' bind={{ bindName: 'ratingTo', isMajor: false }} setClickedSelector={setClickedSelector} clickedSelector={clickedSelector} name='Рейтинг от' items={rating} addFilter={addFilter} filters={filters} />
                <Selector selectorName='ratingTo' bind={{ bindName: 'ratingFrom', isMajor: true }} setClickedSelector={setClickedSelector} clickedSelector={clickedSelector} name='Рейтинг до' items={[...rating].reverse()} addFilter={addFilter} filters={filters} />
            </div>
            <div className={styles.submit_wrapper}>
                <button disabled={Object.keys(filters).length === 0} onClick={() => submit(filters, 1)} className={styles.submit_btn}>Искать по фильтрам</button>
            </div>
        </div>

    )
}

export default SelectorsBar