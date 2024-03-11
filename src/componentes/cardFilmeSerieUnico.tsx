import Image from 'next/image';
import styles from './cardFilmeSerieUnico.module.css';
import Loader from '@/componentes/loader';
import ButtonVoltar from '@/componentes/buttonVoltar';
import { formatoDadosAPI } from '@/hoocks/useBuscaDados';

interface CardFilmContentProps {
  dadoFiltrado: formatoDadosAPI | undefined; 
  loading: boolean;
}

export default function CardFilmeSerieUnico({ dadoFiltrado, loading }: CardFilmContentProps) {

  return (
    <div className={styles.main}>
      {dadoFiltrado ? (
        <>
          <div className={styles.cardFilmUnico}>
            <div className={styles.boxImg}>
              <Image src={dadoFiltrado?.image.original ?? ''} alt="imagem filme" width={600} height={550} />
            </div>
            <div className={styles.info}>
              <h2>Nome: {dadoFiltrado?.name}</h2>
              <h3>Descrição:</h3>
              <p>{dadoFiltrado?.summary}</p>
              <h4>Nota: {dadoFiltrado?.rating.average.toString()}</h4>
              <h4>Lançamento: {dadoFiltrado?.ended}</h4>
            </div>
          </div>
          <ButtonVoltar />
        </>
      ) : (
        <Loader loading={loading} />
      )}
      {!dadoFiltrado && !loading &&
        <h2> Dados não encontrados. </h2>
      }
    </div>
  );
}

