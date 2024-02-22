import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom'

import styles from './ErrorPage.module.css'

const ErrorPage = () => {

    const error = useRouteError()

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.firstTitle}>{error.status}</h1>
            <h2 className={styles.firstTitle}>{error.statusText}</h2>
            <h2 className={styles.secondTitle}>{error.message}</h2>
            <Link to="/">
                <p className={styles.redirect}>Вернуться на главную страницу</p>
            </Link>
        </div>

    )
}

export default ErrorPage