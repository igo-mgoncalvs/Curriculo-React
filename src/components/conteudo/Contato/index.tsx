import styles from './contato.module.scss'
import GitHub from 'assets/Redes/github.svg';
import Linkeding from 'assets/Redes/linkeding.svg';

export default function Contato () {
    return (
        <div className={styles.contato}>
            <div className={styles.contato__enderecos}>
                <p>Telefone: +55 (11) 96803-6004</p>
                <p>E-mail: igor2013mgoncalves@gmail.com</p>
            </div>
            <ul className={styles.contato__redes}>
                <li><img src={Linkeding} alt="Linkeding" /></li>
                <li><img src={GitHub} alt="GitHub"/></li>
            </ul>
        </div>
    )
}