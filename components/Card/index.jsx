import styles from "./Card.module.css"

export default function Card({ titulo, imagem, preparo, porcoes }) {
    return (
        <div className={styles.card}>
            <img src={imagem} alt={titulo} className={styles.card_image} />
            <h2 className={styles.card_title}>{titulo}</h2>
            <div className={styles.card_info}>
                <div>
                    <img src="/time.svg" alt="" />
                    <span>{preparo}</span>
                </div>
                <div>
                    <img src="food.svg" alt="" />
                    <span>{porcoes}</span>
                </div>
            </div>
        </div>
    )
}