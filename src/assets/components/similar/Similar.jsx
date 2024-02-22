import { useEffect } from 'react'
import { scrollToTop } from '@utils/scrollToTop.jsx'
import SimilarSlider from '@components/similar-slider/SimilarSlider.jsx'

const Similar = ({ similar }) => {

    useEffect(() => {
        scrollToTop()
    }, [])

    if (similar?.items?.length) {
        return (
            <section>
                <SimilarSlider title='Похожие фильмы:' filmsData={similar} />
            </section>
        )
    }

}

export default Similar