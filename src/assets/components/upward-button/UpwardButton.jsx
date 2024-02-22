import { useState } from 'react'
import { useRef } from 'react'
import styles from './UpwardButton.module.css'

const UpwardButton = () => {
    const [visible, setVisible] = useState(false)

    const buttonRef = useRef(null)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    window.addEventListener('scroll', toggleVisible)

    return (
        <div onClick={scrollToTop} ref={buttonRef} className={`${styles.button} ${visible ? styles.active : ''}`}>
            <div className={styles.arrow_part_left}></div>
            <div className={styles.arrow_part_right}></div>
        </div>
    )
}

export default UpwardButton