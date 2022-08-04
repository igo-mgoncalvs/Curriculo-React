import styles from "./sobreMim.module.scss"

export default function SobreMim () {
    return (
        <section className={styles.sobreMim}>
            <div className={styles.sobreMim__box}>
                <h1 style={{fontSize:'2rem'}}>Igor M. Gonçalves<span className={styles.blinkingCursor}>_</span></h1>
                <p className={styles.sobreMim__box__funcao}>Desenvolvedor Front-End</p>
                <p>Sou determinado e focado. Tenho experiência com diversas linguagens de programação e sempre estou em busca de aprender mais. Gosto do novo e sempre procuro me colocar em novos desafios.</p>
            </div>
        </section>
    )
}