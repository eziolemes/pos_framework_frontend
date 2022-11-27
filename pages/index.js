import Button from "../components/Button";
import CardList from "../components/CardList";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <CardList />
      <Button>Mais informações</Button>
      <Button danger="true">Deletar</Button>
      <Button warning="true">Alterar</Button>
      <Button success="true">Salvar</Button>
    </div>
  )
}
