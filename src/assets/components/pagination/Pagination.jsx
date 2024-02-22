import styles from './Pagination.module.css'

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {

    const openNextPage = (totalPages, currentPage) => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const openPrevPage = (page) => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <div className={styles.wrapper}>
            <button className={styles.button} onClick={() => openPrevPage(currentPage)} disabled={currentPage === 1}>	&#171;</button>
            <span className={styles.span}>страница: {currentPage} из {totalPages}</span>
            <button className={styles.button} onClick={() => openNextPage(totalPages, currentPage)} disabled={currentPage === totalPages}>&#187;</button>
        </div>
    )
}

export default Pagination