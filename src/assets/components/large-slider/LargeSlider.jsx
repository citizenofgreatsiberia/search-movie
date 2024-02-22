import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import LargePoster from '@components/large-poster/LargePoster.jsx'

import styles from './LargeSlider.module.css'
import 'swiper/css'

import { register } from 'swiper/element/bundle'
register()

const LargeSlider = ({ title, filmsData, reverse }) => {

    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const swiper = useRef(null)

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>
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
                loop={true}
                speed={400}
                spaceBetween={16}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    reverseDirection: reverse,
                }
                }
                centeredSlides={true}
                loopPreventsSliding={true}
                breakpoints={
                    {
                        300: {
                            slidesPerView: 1,
                            centeredSlides: true,
                            nested: true,
                        },
                        600: {
                            slidesPerView: 2,
                            centeredSlides: false,
                        },
                        900: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                        1600: {
                            slidesPerView: 5,
                        },
                        2000: {
                            slidesPerView: 6,
                        }
                    }
                }
            >
                {filmsData.items.map((film) => {
                    return <SwiperSlide key={film.kinopoiskId} className={styles.slide}><LargePoster filmData={film} /></SwiperSlide>
                })}
                <div className={styles.navigationPrev} ref={navigationPrevRef}><img src={new URL('@images/slider/next.svg', import.meta.url).href} alt="prev" /></div>
                <div className={styles.navigationNext} ref={navigationNextRef}><img src={new URL('@images/slider/next.svg', import.meta.url).href} alt="next" /></div>
            </Swiper>
        </div>
    )
}

export default LargeSlider