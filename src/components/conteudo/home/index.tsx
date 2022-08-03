import styles from './home.module.scss'

export default function Home () {
    const imgURL = 'https://github.com/igo-mgoncalvs/Curriculo-React/blob/master/src/assets/home/IMG-20210718-WA0007.png?raw=true'
    
    return (
        <div className={styles.home}>
            <img src={imgURL} alt="Minha foto" />
        </div>
    )
}