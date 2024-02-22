import styles from './PersonProfile.module.css'

const PersonProfile = ({ aboutPerson }) => {
    const person = aboutPerson.person

    return (
        <article className={styles.wrapper}>
            <div style={{ width: "65vw", minWidth: '350px', borderRadius: '10px' }}>
                <div className={styles.aboutPerson}>
                    <div className={styles.photo_wrapper}>
                        {
                            person.posterUrl ? <img src={person.posterUrl} alt="poster" className={styles.photo} /> : <img src={'@images/no-poster.gif'} alt="poster" className={styles.photo} />
                        }
                    </div>

                    <div className={styles.info}>
                        <h2 className={styles.first_title}>{person.nameRu}</h2>
                        <h3 className={styles.second_title}>{person.profession}</h3>
                        {person.birthday ? <p className={styles.text}>Дата рождения: {person.birthday.split('-').reverse().join('.')}</p> : null}
                        {person.birthplace ? <p className={styles.text}>Место рождения: {person.birthplace}</p> : null}
                        {person.death ? <p className={styles.text}>Дата смерти: {person.death.split('-').reverse().join('.')}</p> : null}
                        {person.deathplace ? <p className={styles.text}>Место смерти: {person.deathplace.split('-').reverse().join('.')}</p> : null}
                        {person.age ? <p className={styles.text}>Возраст: {person.age}</p> : null}
                        {person.sex ? <p className={styles.text}>Пол: {person.sex === 'MALE' ? 'муж.' : person.sex === 'FEMALE' ? 'жен.' : ''}</p> : null}
                        {person.growth ? <p className={styles.text}>Рост: {person.growth}</p> : null}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default PersonProfile