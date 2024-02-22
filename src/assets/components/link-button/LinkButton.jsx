import { NavLink } from 'react-router-dom'
import styles from './LinkButton.module.css'

const LinkButton = ({ children, path }) => {
    return (
        <NavLink to={path} className={styles.text}>
            {children}
        </NavLink>
    )
}

export default LinkButton