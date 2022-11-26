import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      Fritando ovo
      <Card 
        titulo="Ovo com arroz e pepino"
        imagem="/receita-arroz-pepino.png"
        preparo="25 minutos"
        porcoes="serve 2 pessoas"
      />
      <Card 
        titulo="Ovo com bacon"
        imagem="/receita-arroz-pepino.png"
        preparo="5 minutos"
        porcoes="serve 1 pessoa"
      />
    </div>
  )
}
