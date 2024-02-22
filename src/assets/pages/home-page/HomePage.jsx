import { useLoaderData } from "react-router-dom"

import LargeSlider from "@components/large-slider/LargeSlider.jsx"
import Streamings from "@components/streamings/Streamings.jsx"
import SmallSlider from "@components/small-slider/SmallSlider.jsx"

import { fetchData } from "@utils/fetchData.jsx"
import { getDate } from "@utils/getDate.jsx"
import { scrollToTop } from "@utils/scrollToTop.jsx"

export async function loader() {
    const { year, month } = getDate()
    const premieresFilms = await fetchData(`https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${year}&month=${month}`)
    const topFilms = await fetchData('https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1')
    const familyFilms = await fetchData('https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=FAMILY&page=1')
    const popularFilms = await fetchData('https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1')
    return { premieresFilms, topFilms, familyFilms, popularFilms }
}

const HomePage = () => {
    const { premieresFilms, topFilms, familyFilms, popularFilms } = useLoaderData()

    scrollToTop()

    return (
        <>
            <LargeSlider title="Премьеры" filmsData={premieresFilms} />
            <Streamings />
            <SmallSlider title="Топ фильмов" filmsData={topFilms} />
            <SmallSlider title="Семейные" filmsData={familyFilms} />
            <SmallSlider title="Популярные" filmsData={popularFilms} />
        </>
    )
}
export default HomePage