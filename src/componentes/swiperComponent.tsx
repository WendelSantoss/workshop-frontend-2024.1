import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState, useRef } from "react";
import Link from 'next/link';
import styles from './swiper.module.css'
import Image from 'next/image';
import { formatoDadosAPI } from '@/hoocks/useBuscaDados';

register();

export default function SwiperComponent({ dados }: { dados: formatoDadosAPI[] }) {

    const [cardsOn, setCardsOn] = useState(5);
    


    const swiperRef = useRef<any>('');
    
    useEffect(() => {

        function resizeObserverCallback(entries: ResizeObserverEntry[]) {
        
        for (let entry of entries) {
            const width = entry.contentRect.width;
            let cardsToShow = 5; 

            if (width < 370){
                cardsToShow = 1;
            }else if (width < 540) {
                cardsToShow = 2;
            } else if (width < 730) {
                cardsToShow = 3;
            } else if (width < 963) {
                cardsToShow = 4;
            }
            setCardsOn(cardsToShow);
        }
        }

        const resizeObserver = new ResizeObserver(resizeObserverCallback);
        
        const currentRef = swiperRef.current;
        
        if (currentRef) {
        resizeObserver.observe(currentRef);
        }
        
        return () => {
        if (currentRef) {
            resizeObserver.unobserve(currentRef);
        }
        };
    }, [swiperRef]); 

    return(
        <div className={styles.slides}>

            <Swiper 
                ref={swiperRef}
                slidesPerView={cardsOn}
                navigation
                autoplay={{delay: 5000, disableOnInteraction: false}}
            >
                
                {dados.map((itens) =>(
                <SwiperSlide key={itens.id}>
                    <Link href={{
                                pathname: 'filme-serie/',
                                query: { genres: itens.genres , name: itens.name }
                            }}>  
                        <div className={styles.cardMovie} >
                            
                            <Image src={itens.image.medium} alt="Banner filme" width={240} height={210}></Image>
                            <div className={styles.boxNota}>
                                <p>TOP</p>
                                <p>{itens?.rating?.average !== null ? itens.rating.average.toString() : 'N/A'}</p>
                            </div>
                        </div>
            
                    </Link>
        
                    
                </SwiperSlide>

                )
                )}
            </Swiper>
        </div>    

    )
}