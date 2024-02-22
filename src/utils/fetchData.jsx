import { API_KEYS } from "../Api"

export const fetchData = async (url) => {
    let result = null
    for (let i = 0; i < API_KEYS.length - 1; i++) {
        try {
            let data = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-API-KEY': `${API_KEYS[i]}`,
                    'Content-Type': 'application/json',
                },
            })
            if (data.status !== 402) {
                result = await data.json()
                break
            }
        } catch (err) {
            console.log(err)
        }
    }
    return result
}