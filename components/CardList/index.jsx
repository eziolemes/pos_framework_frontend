import styles from "./CardList.module.css"
import Card from '../Card';

export default function CardList() {
    return (
        <div className={styles.card_list}>
            <Card 
                titulo="Ovo com arroz e pepino"
                imagem="receita-arroz-pepino.png"
                preparo="25 minutos"
                porcoes="serve 2 pessoas"
            /> 
            <Card 
                titulo="Ovo com bacon"
                imagem="receita-ovo.png"
                preparo="10 minutos"
                porcoes="serve 1 pessoa"
            />
        </div>
    )
}