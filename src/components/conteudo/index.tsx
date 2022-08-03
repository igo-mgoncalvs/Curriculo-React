import Formacao from "./formacao"
import styles from './conteudo.module.scss'

type Props = {
    id: number
}

export default function Conteudo (id: Props) {

    return (
        <section className={styles.conteudo}>
            <Formacao/>
        </section>
    )
}