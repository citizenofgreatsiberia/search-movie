import { useLoaderData, useNavigate } from 'react-router-dom'
import { fetchData } from '@utils/fetchData.jsx'
import { scrollToTop } from '@utils/scrollToTop.jsx'
import PersonProfile from '@components/person-profile/PersonProfile.jsx'
import PersonFacts from '@components/person-facts/PersonFacts.jsx'
import styles from './PersonPage.module.css'

export async function loader({ params }) {
    const person = await fetchData(`https://kinopoiskapiunofficial.tech/api/v1/staff/${params.personId}`)
    return { person }
}

const PersonPage = () => {
    const person = useLoaderData()

    const navigate = useNavigate()
    const openFilmPage = (filmId) => {
        navigate(`/films/${filmId}`, { state: { filmId } })
    }

    scrollToTop()

    return (
        <div className={styles.wrapper}>
            <PersonProfile aboutPerson={person} />
            <PersonFacts aboutPerson={person} />
            <section className={styles.films_list_wrapper}>
                <h3 className={styles.third_title}>Участие:</h3>
                {
                    person.person.films.map((film, index) => {
                        return (
                            <div key={index} onClick={() => openFilmPage(film.filmId)} className={styles.button}>
                                <h4 className={styles.fourth_title}>{`${index + 1}. ${film.nameRu ? film.nameRu : film.nameEn}`} <span className={styles.span}>{`(${film.description ? film.description : film.professionKey})`}</span></h4>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default PersonPage