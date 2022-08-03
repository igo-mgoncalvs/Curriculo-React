import styles from './conteudo.module.scss'
import Formacao from "./formacao"
import Home from "./home"
import Contato from "./Contato"
import Portfolio from "./portfolio"

type Props = {
    id: number
}

export default function Conteudo (id: Props) {

    return (
        <section className={styles.conteudo}>
            <Portfolio />
        </section>
    )
}