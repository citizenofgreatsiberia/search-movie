import { NavLink } from 'react-router-dom'
import ToSearchButton from '@components/to-search-button/ToSearchButton'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
            </div>
            <nav className={styles.navigation}>
                <NavLink className={styles.link} to="/">Главная</NavLink>
                <NavLink className={styles.link} to="/categories">Категории</NavLink>
                <NavLink className={styles.link} to="/about">О сайте</NavLink>
                <NavLink className={styles.link} to="/favorites">Избранное</NavLink>
                <NavLink className={styles.link} to="/error">Страница 404</NavLink>
                <NavLink className={styles.link} to="/search" >
                    <ToSearchButton />
                </NavLink>
            </nav>
        </div>
    )
}

export default Header