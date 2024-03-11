'use client'
import Link from "next/link"
import styles from "./header.module.css"
import Lupa from "../../public/lupaIcon1.png"
import LogoNetflix from "../../public/netflixLogo.png"
import Image from "next/image"
import { useState } from "react"
import MobileIcon from "../../public/mobile.png"

export default function Header(){
    
    const [pesquisa, setPesquisa]= useState('')

    const [ mobile, setMobile]= useState (false);
    const hangdleMobile= ()=> setMobile(prev=> !prev);
    

    return(

        <header className={styles.header}>
            
            <div className={styles.logo}>

                <Link href='http://localhost:3000/'>
                    <Image src={LogoNetflix} alt='Logo NetFlix'></Image>
                </Link>
            
            </div>

            <ul className={styles.menu}>
                <li><Link href='http://localhost:3000/'>Inicio</Link></li>
            </ul>
            

            <div className={styles.alinhaEsquerda}>

                <div className={styles.mobile}>

                    <Image onClick={hangdleMobile} src={MobileIcon} alt="img mobile"/>
                    
                    {mobile &&

                        <ul className={styles.menuMobile}>
                            <li><Link onClick={hangdleMobile} href='http://localhost:3000/'>Inicio</Link></li>
                        </ul>
                    }

                </div>

                <div className={styles.search}>
                    
                    <input onChange={(e)=> setPesquisa(e.target.value)} 
                    type='text' id='search'
                    placeholder='Pesquise pelo Título...'
                    /> 
                    
                    <div className={styles.searchIcon}>
                        {pesquisa &&
                            <Link href={{
                                pathname: '/busca/',
                                query: { busca: pesquisa? pesquisa : ''}
                            }}> 
                                <Image src={Lupa} alt='iconLupa'></Image> 
                            </Link>
                        }
                    </div>
                
                </div>
            </div>
            
        </header>
    )
}