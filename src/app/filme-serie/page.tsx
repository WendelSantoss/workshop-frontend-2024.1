'use client'
import useBuscaDados from "@/hoocks/useBuscaDados";
import { useSearchParams } from "next/navigation";
import CardFilmeSerieUnico from "@/componentes/cardFilmeSerieUnico";

export default function Filme(){
    
    const { dados, loading }= useBuscaDados()

    const parahms = useSearchParams();
    const name = parahms.get('name')
    
    const dadoFiltrado = dados.find(info => { 
        return info.name === name ; 
    });
    return(

        <CardFilmeSerieUnico dadoFiltrado={dadoFiltrado} loading={loading}/>
    
        
       
    )
}