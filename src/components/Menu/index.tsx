import styles from './Menu.module.scss'
import GitHub from 'assets/Redes/github.svg';
import Linkeding from 'assets/Redes/linkeding.svg';
import { useState } from 'react';
import Conteudo from 'components/conteudo';

export default function Menu () {
    const [idMenu, setIdMenu] = useState(Number)

    return (
        <>
            <div>
                <ul className={styles.menus}>
                    <li onClick={() => {setIdMenu(1)}}>Home</li>
                    <li onClick={() => {setIdMenu(2)}}>Portfólio</li>
                    <li onClick={() => {setIdMenu(3)}}>Formação</li>
                    <li onClick={() => {setIdMenu(4)}}>Contato</li>
                    <li onClick={() => {setIdMenu(5)}}>
                        <a href="https://github.com/igo-mgoncalvs" target="_blank">
                            <img src={GitHub}/>
                        </a>
                        <a href="https://www.linkedin.com/in/igor-moreira-711571221/" target="_blank">
                            <img src={Linkeding}/>
                        </a>
                    </li>
                </ul>
            </div>
            <Conteudo id={idMenu}/>
        </>
    )
}