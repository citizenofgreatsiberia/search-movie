import { useState } from 'react'
import styles from './PersonFacts.module.css'

const PersonFacts = ({ aboutPerson }) => {
    const facts = aboutPerson.person.facts
    const total = facts.length
    const [factIndex, setFactIndex] = useState(0)

    const changeFact = () => {
        if (factIndex < total - 1) {
            setFactIndex(factIndex + 1)
        } else {
            setFactIndex(0)
        }
    }

    if (total > 0) {
        return (
            <section className={styles.section}>
                <h3 className={styles.title}>Интересные факты:</h3>
                <div className={styles.wrapper}>
                    <div className={styles.header}>
                        <h3 className={styles.second_title}>Факт</h3>
                    </div>
                    <div className={styles.main}>
                        <p className={styles.fact}>
                            {facts[factIndex].replace(/(\<(\/?[^>]+)>)|&#\d{3,4}?;|&laquo;|&raquo;/g, '')} <br />
                        </p>
                        {total > 1 ? <button onClick={changeFact} className={styles.more}>Еще факты...</button> : null}
                    </div>
                </div>
            </section >
        )
    } else {
        return null
    }
}

export default PersonFacts
