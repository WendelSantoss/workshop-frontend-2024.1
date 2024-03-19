'use client'
import Loader from "@/componentes/loader";
import { formatoDadosAPI } from "@/hoocks/useBuscaDados";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CardFilmeSerieUnico from "@/componentes/cardFilmeSerieUnico";
import styles from "./busca.module.css"


export default function Busca() {
    const [pesquisaFiltrada, setPesquisaFiltrada]= useState<formatoDadosAPI[]>()
    const [loading, setLoading]= useState(true)
    const parahms = useSearchParams();
    const busca = parahms.get('busca')

    useEffect(() => {
        setLoading(true)

        if(busca){
            fetch(`https://api.tvmaze.com/singlesearch/shows?q=${busca}`)
                .then(response => response.json())
                .then((data) => {
                    
                    console.log("aqui",data);
        
                    const resultados: formatoDadosAPI[] = [data].map((item: any) => ({
                        id: item.id,
                        genres: item.genres,
                        name: item.name,
                        image: {
                            medium: item.image.medium,
                            original: item.image.original,
                        },
                        rating: {average: item.rating ? item.rating.average : 0},
                        summary: item.summary ? item.summary : 'Sem descrição.',
                        ended: item.ended,
                    }));
                    setPesquisaFiltrada(resultados);
                    setLoading(false)
                    
                })
                .catch(error => {
                    setPesquisaFiltrada([])
                    setLoading(false)
                    console.log(error)
                } );
        }else{
            setLoading(false);
            setPesquisaFiltrada([]);
        }
    }, [busca, parahms]);
    
  
    return (
      
            <div className={styles.main}>
            
                {loading && <Loader/>}
            
                {pesquisaFiltrada?.length != 0 && !loading &&
                    pesquisaFiltrada?.map((itens) =>(
                        <div key={itens.id}>
            
                            <CardFilmeSerieUnico dadoFiltrado={itens}/>
                                                                        
                        </div>
                    ))  
                }

                {pesquisaFiltrada?.length == 0 && !loading && 

                    <h1>Nenhuma série ou filme foi encontrado relacionado a pesquisa realizada.</h1>
                
                }

            </div>
      
    )


}  