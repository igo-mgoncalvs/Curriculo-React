import styles from './formacao.module.scss'
import conhecimentos from './conhecimentos.json'

export default function Formacao () {
    const imgURL = 'https://raw.githubusercontent.com/igo-mgoncalvs/Curriculo-React/715396ac161438cf7b165cfd350384e6f0d606da/src/assets/conhecimentos/'
    
    return(
        <section className={styles.formacao}>
            <div className={styles.formacao__academica}>
                <h1>Fomação Academica</h1>
                <ul>
                    <li>Analise e Desenvolvimento de Sistemas – FMU <p>Cursando | 1º Semestre</p></li>
                    <li>Inglês - English Live<p>Cursando</p></li>
                    <li>Espanhol - Centro de línguas<p>Concluído | 2016 | Intermediário</p></li>
                    <li>Informática básica - Senai<p>Concluído | 2015</p></li>
                </ul>
            </div>

            <div className={styles.formacao__conhecimentos}>
                <h1>Conhecimentos</h1>
                <div className={styles.formacao__conhecimentos__itens}>
                    {conhecimentos.map(resposta => (
                        <div key={resposta.title}>
                            <img src={`${imgURL}${resposta.img}`} alt={resposta.title}/>
                            <p>{resposta.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}