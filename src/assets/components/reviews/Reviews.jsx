import styles from './Reviews.module.css'

const Reviews = ({ reviews }) => {
    if (reviews.length) {
        return (
            <section className={styles.section}>
                <h3 className={styles.first_title}>Рецензии зрителей:</h3>
                {
                    reviews.map((rev) => {
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
                    })
                }

            </section>
        )
    } else {
        return (
            <section className={styles.section}>
                <h3 className={styles.first_title}>На этот фильм еще не оставили рецензий</h3>
            </section>
        )
    }
}

export default Reviews