import Formacao from "./formacao"
import styles from './conteudo.module.scss'
import Home from "./home"

type Props = {
    id: number
}

export default function Conteudo (id: Props) {

    return (
        <section className={styles.conteudo}>
            <Home />
        </section>
    )
}