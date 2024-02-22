import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import SmallPoster from '@components/small-poster/SmallPoster.jsx'
import styles from './SmallSlider.module.css'

import { register } from 'swiper/element/bundle'
register()

const SmallSlider = ({ title, filmsData }) => {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const swiper = useRef(null)

    return (
        <section className={styles.wrapper}>
            <h3 className={styles.title}>{title}</h3>
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
                slidesPerView={5}
                slidesPerGroup={3}
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
                            slidesPerGroup: 2,
                        },
                        710: {
                            slidesPerView: 3,
                        },
                        900: {
                            slidesPerView: 4,
                        },
                        1275: {
                            slidesPerView: 5,
                        },
                        1500: {
                            slidesPerView: 6,
                        },
                        1700: {
                            slidesPerView: 7,
                        },
                        1850: {
                            slidesPerView: 8,
                        }
                    }
                }
            >
                {filmsData?.items?.map((film) => {
                    return <SwiperSlide key={film.kinopoiskId} className={styles.slide}><SmallPoster filmData={film} /></SwiperSlide>

                })}
                <button className={`${styles.navigation} ${styles.navigationPrev}`} ref={navigationPrevRef}><span>&lt;</span></button>
                <button className={`${styles.navigation} ${styles.navigationNext}`} ref={navigationNextRef}><span>&gt;</span></button>
            </Swiper>
        </section>
    )
}

export default SmallSlider
