import { useNavigation } from 'react-router-dom'
import styles from './Preloader.module.css'

const Preloader = () => {

    const navigation = useNavigation()
    return (
        <div className={navigation.state === 'loading' ? styles.wrapper_active : styles.wrapper}>
            <div className={
                navigation.state === 'loading' ? styles.loading : styles.none
            }></div>
        </div>

    )
}

export default Preloader