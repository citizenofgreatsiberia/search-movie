import { useState } from 'react'
import styles from './Selector.module.css'

const Selector = ({
    selectorName,
    setClickedSelector,
    clickedSelector,
    name,
    items,
    addFilter,
    filters,
    bind
}) => {
    const [value, setValue] = useState('')

    const bindSelectors = (filters, item, bind) => {
        if (bind && bind.isMajor) {
            return item < filters[bind.bindName]?.item ? true : false
        } else if (bind) {
            return item > filters[bind.bindName]?.item ? true : false
        }
    }

    return (
        <div className={value ? styles.active : ''}>
            <div id={selectorName}
                onClick={e => selectorName !== clickedSelector ? setClickedSelector(selectorName) : setClickedSelector(false)}
                className={selectorName === clickedSelector ? `${styles.selector_wrapper} ${styles.selector_wrapper_active}` : styles.selector_wrapper}
            >
                <p className={styles.selector_title}>{`${name} ${value}`}</p>
                <ul className={styles.selector_list}>
                    <li className={styles.list_item}><button className={styles.list_item_btn} onClick={() => {
                        setValue('')
                        addFilter(filters, null, selectorName, null)
                    }} >Без фильтра</button></li>
                    {items.map((item, index) => <li key={item} className={styles.list_item}><button disabled={bindSelectors(filters, item, bind)} className={styles.list_item_btn} onClick={() => {
                        setValue(item)
                        addFilter(filters, item, selectorName, index)
                    }}>{item}</button></li>)}
                </ul>
            </div>
        </div>

    )
}

export default Selector