import styles from './Menu.module.scss'
import GitHub from 'assets/Redes/github.svg';
import Linkeding from 'assets/Redes/linkeding.svg';
import { useState } from 'react';
import Conteudo from 'components/conteudo';
import classNames from 'classnames';

export default function Menu () {
    const [idMenu, setIdMenu] = useState(Number)

    return (
        <>
            <div>
                <ul className={styles.menus}>
                    <li onClick={() => {setIdMenu(0)}} 
                        className={classNames({
                            [styles.ativo]: idMenu === 0,
                            [styles.menus__item]: true  
                        })}
                    >
                        Home
                    </li>

                    <li onClick={() => {setIdMenu(1)}}
                        className={classNames({
                            [styles.ativo]: idMenu === 1,
                            [styles.menus__item]: true  
                        })}
                    >
                        Portfólio
                    </li>

                    <li onClick={() => {setIdMenu(2)}}
                        className={classNames({
                            [styles.ativo]: idMenu === 2,
                            [styles.menus__item]: true  
                        })}
                    >
                        Formação
                    </li>

                    <li onClick={() => {setIdMenu(3)}}
                        className={classNames({
                            [styles.ativo]: idMenu === 3,
                            [styles.menus__item]: true  
                        })}
                    >
                        Contato
                    </li>

                    <li onClick={() => {setIdMenu(4)}}
                        className={classNames({
                            [styles.disable]: idMenu === 3,
                            [styles.menus__item]: true  
                        })}
                    >
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