import axios from 'axios'
import { IRepos } from 'interfaces/IRepos'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './portfolio.module.scss'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import classNames from 'classnames'

interface Props {
    id: number
}

export default function Portfolio () {
    const [reposGeral, setReposGeral] = useState<IRepos[]>([])
    const [repos, setRepos] = useState<IRepos[]>([])
    const [scrollX, setScrollX] = useState(0)
    const [id, setId] = useState(0)
    
    useEffect(() => {
        axios.get('https://api.github.com/users/igo-mgoncalvs/repos')
        .then(resposta => {
           setReposGeral(resposta.data)
        })
    },[])

    useEffect(() => {
        const filtroRepos = reposGeral.filter(repos => repos.fork === false)
        setRepos(filtroRepos)
    }, [reposGeral])

    function moveListaDireitia () {
        let x = scrollX + Math.round(window.innerWidth / 2)
        if(x > 0) {
            x = 0 
        }
        setScrollX(x)
    }

    function moveListaEsquerda () {
        let x = scrollX - Math.round(window.innerWidth / 3)
        let listW = repos.length * 224;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 450;
        }
        setScrollX(x)
    }

    return (
        <section className={styles.portfolio} >
            <div className={styles.navigateBefore} onClick={() => moveListaDireitia()}>
                <NavigateBeforeIcon style={{fontSize: '60px'}}/>
            </div>

            <div className={styles.navigateNext} onClick={() => moveListaEsquerda()}>
                <NavigateNextIcon style={{fontSize: '60px'}} />
            </div>

            <div className={styles.portfolio__repositorios} style={{marginLeft: `${scrollX}px`}}>
                <div className={styles.portfolio__repositorios__lista}>
                    {repos.map((resposta, key) => (
                        <div key={key} className={styles.portfolio__repositorios__item} onClick={() => setId(key)}>
                            <p className={styles.portfolio__repositorios__item__nome}>{resposta.name}</p>
                            <div 
                                key={key}
                                style={{
                                    backgroundImage: `url(./assets/portfolio/${resposta.name}.png)`,
                                }}
                                className={classNames({
                                    [styles.portfolio__repositorios__img]:true,
                                    [styles.portfolio__repositorios__imgAtiva]: repos[id].id? repos[id].id === resposta.id: false
                                })}                                
                            >
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.portfolio__descricao}>
                <h3 className={styles.portfolio__descricao__nome}>{repos[id]?.name}</h3>
                <p>{repos[id]?.description}</p>

                <a href={`https://igo-mgoncalvs.github.io/${repos[id]?.name}`} target='_blanck'>Para ver o projeto clique aqui</a>
            </div>
        </section>
    )
}