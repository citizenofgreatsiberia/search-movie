import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import SmallPoster from '@components/small-poster/SmallPoster.jsx'
import styles from './SimilarSlider.module.css'

import { register } from 'swiper/element/bundle'
register()

const SimilarSlider = ({ title, filmsData }) => {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const swiper = useRef(null)

    return (
        <>
            <h3 className={styles.title}>{title}</h3>
            <section className={styles.wrapper}>
                <Swiper
                    ref={swiper}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current
                        swiper.params.navigation.nextEl = navigationNextRef.current
                    }}
                    slidesPerView={3}
                    slidesPerGroup={1}
                    speed={300}
                    spaceBetween={16}
                    breakpoints={
                        {
                            10: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                            500: {
                                slidesPerView: 2,
                                slidesPerGroup: 1,
                            },
                            710: {
                                slidesPerView: 3,
                                slidesPerGroup: 2,
                            },
                            900: {
                                slidesPerView: 3,
                                slidesPerGroup: 2,

                            },
                            1275: {
                                slidesPerView: 4,
                                slidesPerGroup: 3,
                            },
                            1500: {
                                slidesPerView: 5,
                                slidesPerGroup: 3,
                            },
                            1700: {
                                slidesPerView: 6,
                                slidesPerGroup: 4,

                            },
                            1850: {
                                slidesPerView: 7,
                                slidesPerGroup: 4,

                            }
                        }
                    }
                >
                    {filmsData?.items?.map((film) => {
                        return <SwiperSlide key={film.filmId} className={styles.slide}><SmallPoster filmData={film} /></SwiperSlide>

                    })}

                    <button className={`${styles.navigation} ${styles.navigationPrev}`} ref={navigationPrevRef}><span>&lt;</span></button>
                    <button className={`${styles.navigation} ${styles.navigationNext}`} ref={navigationNextRef}><span>&gt;</span></button>
                </Swiper>
            </section>
        </>

    )
}

export default SimilarSlider
