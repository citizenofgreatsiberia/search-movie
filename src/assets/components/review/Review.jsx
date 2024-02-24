import { useState } from 'react'
import styles from './Review.module.css'

const Review = ({ rev }) => {

    const [maxLength, setMaxLength] = useState(300)

    const text = rev.description.replace(/(\<(\/?[^>]+)>)|&#\d{3,4}?;|&laquo;|&raquo;/g, '')
    return (
        <div key={rev.date} className={styles.review}>
            <div className={styles.header}>
                <p className={styles.author}>{rev.author}:</p>
                {
                    rev.title ?
                        <h3 className={styles.second_title}>"{rev.title}"</h3>
                        : null
                }
                {
                    rev.type === 'POSITIVE' ?
                        <p className={styles.text}>Оценка: хорошо</p>
                        : rev.type === 'NEGATIVE' ?
                            <p className={styles.text}>Оценка: плохо</p>
                            :
                            <p className={styles.text}>Оценка: нормально</p>
                }
            </div>
            <div className={styles.main}>
                {
                    text.length > maxLength
                        ?
                        <p className={styles.text}>{text.substr(0, maxLength - 1)}...</p>
                        :
                        <p className={styles.text}>{text.substr(0, maxLength - 1)}</p>
                }
                {
                    text.length > maxLength
                        ?
                        <button onClick={() => { setMaxLength(text.length + 1) }} className={styles.grow_button}>Показать полностью</button>
                        :
                        null
                }

            </div>
        </div>
    )
}

export default Review