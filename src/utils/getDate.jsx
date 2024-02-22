export const getDate = () => {
    const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
    const date = new Date()
    const year = date.getFullYear()
    const month = months[date.getMonth()]
    return { year, month }
}