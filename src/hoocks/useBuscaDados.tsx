'use client'
import { useEffect, useState } from "react"

export interface formatoDadosAPI {
    id: number;
    genres: string[];
    name: string;
    image: {
    medium: string;
    original: string;
    };
    rating: {average: number};
    summary: string;
    ended: string;
}

export default function useBuscaDados(){
    const [loading, setLoading]= useState(true)
    const [dados, setDados]= useState<formatoDadosAPI[]>([])
    const [comedy, setComedy]= useState<formatoDadosAPI[]>([])
    const [action, setAction]= useState<formatoDadosAPI[]>([])
    const [horror, setHorror]= useState<formatoDadosAPI[]>([])
    const [romance, setRomance]= useState<formatoDadosAPI[]>([])
    const [drama, setDrama]= useState<formatoDadosAPI[]>([])
    const [top, setTop]= useState<formatoDadosAPI[]>([])

    const filtraDados = (genero: string)=> {
        return dados.filter(item => {
            return item.genres.includes(genero);
          });
    }

    const topNove = ()=>{
        return dados.filter(item=>{
            return item.rating.average > 8.5
        })
    }
 
    useEffect(()=>{
        setLoading(true)

        async function getDados(){
            await fetch(`https://api.tvmaze.com/shows`)
            .then(response=> response.json())
            .then((data: any)=>{
               
                const resultados : formatoDadosAPI[]= data.map((item:any) => ({
                    id: item.id,
                    genres: item.genres,
                    name: item.name,
                    image: {
                    medium: item.image.medium,
                    original: item.image.original,
                    },
                    rating: {
                    average: item.rating ? item.rating.average : 0},
                    summary: item.summary? item.summary : 'Sem descrição.',
                    ended: item.ended,
                }));
                setDados(resultados)
          
            })
            .catch(error=> console.log(error))
        }  
        
        getDados()
            
        
    },[])

    useEffect(()=>{
        setComedy(filtraDados("Comedy"))
        setAction(filtraDados("Action"))
        setHorror(filtraDados("Horror"))
        setRomance(filtraDados("Romance"))
        setDrama(filtraDados("Drama"))
        setTop(topNove())
        setLoading(false)
    },[dados])

    return{
        loading, dados, comedy, action, horror, romance, drama, top
    }
}