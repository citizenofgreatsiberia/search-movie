import { Form, redirect } from 'react-router-dom'
import styles from './SearchBar.module.css'

export async function action({ request }) {
    const formData = Object.fromEntries(await request.formData())
    return redirect(`/search/${encodeURI(formData.filmName)}`)
}

const SearchBar = ({ setSearchParam, keyWord }) => {


    const clear = (e) => {
        e.preventDefault()
        setSearchParam('')
    }

    return (
        <>
            <Form id="search-form" method="post" role="search" className={styles.form} >
                <button className={styles.search_btn} type="submit"><img className={styles.loupe} src={new URL('@images/search-icon.svg', import.meta.url).href}>
                </img></button>
                <input id="q" type="search" name="filmName" placeholder="Искать" className={styles.input} autoComplete="off" value={keyWord} required onChange={(e) => setSearchParam(e.target.value)} />
                <button className={styles.delete_btn} type="reset" onClick={clear}></button>
            </Form>
        </>
    )
}

export default SearchBar