export default function Card({ titulo, imagem, preparo, porcoes }) {
    return (
        <div>
            <img src={imagem} alt={titulo} />
            <h2>{titulo}</h2>
            <div>
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