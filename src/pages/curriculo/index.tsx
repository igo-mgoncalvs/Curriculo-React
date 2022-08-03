import Menu from "components/Menu";
import SobreMim from "components/sobreMim";
import styles from "./curriculo.module.scss"

export default function Curriculo () {
    return (
        <section className={styles.curriculo}>
            <SobreMim />
            <div className={styles.curriculo__complementos}>
                <Menu />
            </div>
        </section>
    )
}