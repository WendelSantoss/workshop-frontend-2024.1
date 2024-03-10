import { formatoDadosAPI } from "@/hoocks/useBuscaDados";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import styles from './bannerTop.module.css'

register();

export default function BannerTop({ top }: { top: formatoDadosAPI[] }){
   
        
        return(
            <section className={styles.mainBanner}>

            <Swiper
              slidesPerView={1}
              navigation
              autoplay={{delay: 12500, disableOnInteraction: false}}
            >
              {top.map((itens) => (
                <SwiperSlide key={itens.id}>

                        <Link href={{
                            pathname: 'filme-serie/',
                            query: { genres: itens.genres , name: itens.name }
                        }}>  
                            <div className={styles.bannerTop} 
                            style={{ backgroundImage: `url(${itens.image.original})`,
                            opacity: 0.5,
                            }}>
                    
                            </div>

                            <div className={styles.info}>
                                    <div className={styles.flex}>
                                        <div className={styles.boxTopNota}>
                                            <p>Top</p>
                                            <p>{itens.rating.average}</p>
                                            
                                        </div>
                                        <h2>Top {itens.rating.average} de hoje.</h2>
                                    </div>
                                    <h2>{itens.name}</h2>
                                    <h4>Gênero: {itens.genres}</h4>
                                </div>
            
                        </Link>
                        

                </SwiperSlide>
              )
              )}
            </Swiper>
            </section>
        )
    }