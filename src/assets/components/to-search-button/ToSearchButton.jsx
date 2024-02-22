import styles from './ToSearchButton.module.css'

const ToSearchButton = () => {
    return (

        <div className={styles.wrapper}>
            <img className={styles.icon} src={new URL('@images/search-icon.svg', import.meta.url).href}></img>
            <p className={styles.text}>Искать на сайте</p>
        </div >
    )
}

export default ToSearchButton