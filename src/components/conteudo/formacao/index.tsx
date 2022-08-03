import styles from './formacao.module.scss'
import conhecimentos from './conhecimentos.json'

export default function Formacao () {
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
                {conhecimentos.map(resposta => (
                    <div>
                        <img src={`${resposta.img}`} alt="" />
                        <p>{resposta.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}