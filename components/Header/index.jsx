import styles from './Header.module.css';

export default function Header () {
    return (
        <header className={styles.header}>
            <div>
                <img src="/logo.svg" alt="Logo" />
            </div>
            <div>
                <h1>Fritando ovo</h1>
                <div>Receitas fáceis</div>
            </div>
        </header>
    )
}