import axios from 'axios'
import { IRepos } from 'interfaces/IRepos'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './portfolio.module.scss'

export default function Portfolio () {
    const [repos, setRepos] = useState<IRepos[]>([])
    
    useEffect(() => {
        axios.get('https://api.github.com/users/igo-mgoncalvs/repos')
            .then(resposta => {
                setRepos(resposta.data)
            })
    }, [])

    return (
        <section className={styles.portfolio}>
            {repos.map(resposta => (
                <div 
                    key={resposta.id}
                    style={{
                        backgroundImage: 'url(https://github.com/igo-mgoncalvs/Aluroni/blob/master/src/assets/ImagensReadme/Inicio.png?raw=true)',
                        backgroundSize:'150px',
                        backgroundRepeat: 'no-repeat'
                    }}
                    className={styles.portfolio__repositorios}
                >
                    <div>
                        <p className={styles.portfolio__repositorios__nome}>{resposta.name}</p>
                        <p className={styles.portfolio__repositorios__descricao}>{resposta.description}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}