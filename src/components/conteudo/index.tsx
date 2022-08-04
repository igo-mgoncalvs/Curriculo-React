import styles from './conteudo.module.scss'
import classNames from 'classnames/bind'
import Formacao from "./formacao"
import Home from "./home"
import Contato from "./Contato"
import Portfolio from "./portfolio"
import { useEffect } from 'react'

type Props = {
    id: number
}

export default function Conteudo (id: Props) {
    const paginas = [
        <Home />,
        <Portfolio/>,
        <Formacao />,
        <Contato />
    ]


    return (
        <section className={classNames({
            [styles.flex]: id.id != 1,
            [styles.block]: id.id === 1
        })}>
            {paginas[id.id]? paginas[id.id] : paginas[0] }
        </section>
    )
}