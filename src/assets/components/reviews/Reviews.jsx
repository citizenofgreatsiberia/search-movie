import Review from '@components/review/Review.jsx'
import styles from './Reviews.module.css'

const Reviews = ({ reviews }) => {
    if (reviews.length) {
        return (
            <section className={styles.section}>
                <h3 className={styles.first_title}>Рецензии зрителей:</h3>
                {
                    reviews.map((rev) => {
                        return (
                            <Review key={rev.date} rev={rev} />
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