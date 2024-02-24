import styles from './Review.module.css'

const Review = ({ rev }) => {
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
                <p className={styles.text}>{rev.description.replace(/(\<(\/?[^>]+)>)|&#\d{3,4}?;|&laquo;|&raquo;/g, '')}</p>
            </div>
        </div>
    )
}

export default Review