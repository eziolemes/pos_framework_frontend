export default function Card({ titulo, imagem, preparo, porcoes }) {
    return (
        <div className="card">
            <img src={imagem} alt={titulo} className="card-image"/>
            <h2 className="card-title">{titulo}</h2>
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