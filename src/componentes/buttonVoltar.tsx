import Link from "next/link";
import styles from "./buttonVoltar.module.css"

export default function ButtonVoltar(){
    return(
        <Link href={"/"}>
            <div className={styles.voltar}>
                
                <p>Voltar</p>
            
            </div>
        </Link>
    )
}