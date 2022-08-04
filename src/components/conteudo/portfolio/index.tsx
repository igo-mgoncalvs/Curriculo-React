import axios from 'axios'
import { IRepos } from 'interfaces/IRepos'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './portfolio.module.scss'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Portfolio () {
    const [repos, setRepos] = useState<IRepos[]>([])
    const [scrollX, setScrollX] = useState(-400)
    const [id, setId] = useState(0)
    
    useEffect(() => {
        axios.get('https://api.github.com/users/igo-mgoncalvs/repos')
            .then(resposta => {
                setRepos(resposta.data)
            })
    }, [])

    function moveListaDireitia () {
        let x = scrollX + Math.round(window.innerWidth / 3)
        if(x > 0) {
            x = 0 
        }
        setScrollX(x)
    }

    function moveListaEsquerda () {
        let x = scrollX - Math.round(window.innerWidth / 3)
        let listW = repos.length * 234.8;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
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
                        <div className={styles.portfolio__repositorios__item} onClick={() => setId(key)}>
                            <p className={styles.portfolio__repositorios__item__nome}>{resposta.name}</p>
                            <div 
                                key={key}
                                style={{
                                    backgroundImage: 'url(https://github.com/igo-mgoncalvs/Aluroni/blob/master/src/assets/ImagensReadme/Inicio.png?raw=true)',
                                    backgroundSize:'150px',
                                    backgroundRepeat: 'no-repeat',
                                    width: '150px',
                                    height:'150px'
                                }}
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