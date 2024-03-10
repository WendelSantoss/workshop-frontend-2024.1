'use client'
import useBuscaDados from "@/hoocks/useBuscaDados";
import styles from "./page.module.css";
import SwiperComponent from "@/componentes/swiperComponent";
import Loader from "@/componentes/loader";
import BannerTop from "@/componentes/bannerTop";


export default function Home() {

  const { loading, dados, comedy, action, horror, romance, drama, top} = useBuscaDados();

  return (
    <main className={styles.main}>
      
      {loading?
        <Loader/>
      :
      <>
        <BannerTop top={top}/>

        <div className={styles.paddingLeft}>
          <h4>Todos os filmes e séries</h4>
          <SwiperComponent dados={dados}/>

          <h4>Filmes e séries de Comédia</h4>
          <SwiperComponent dados={comedy}/>

          <h4>Filmes e séries de Ação</h4>
          <SwiperComponent dados={action}/>
          
          <h4>Filmes e séries de terror</h4>
          <SwiperComponent dados={horror}/>

          <h4>Filmes e séries de Romance</h4>
          <SwiperComponent dados={romance}/>

          <h4>Filmes e séries de Drama</h4>
          <SwiperComponent dados={drama}/>
        </div>
      </>

      }

    </main>
  );
}
