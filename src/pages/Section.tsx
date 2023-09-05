import Card from "./Card"
import games from "../styles/games"
import ItemListByCategory from "./CategoryButton"

interface Fun {
    id: number;
    name: string;
    img: string;
  }

function createCard(game: Fun) {
    return (
      <Card 
        key={game.id}
        title={game.name} // Alterei 'name' para 'title' conforme sua implementação do componente Card
        img={game.img}
      />
    );
  }
export default function Section() {
    return (
        <div className="section">
            <p className="subtitulo">JOGUE SEM BAIXAR</p>
            <h1>Tenha Muita diversão jogando do seu jeito</h1>
            <p>Você pode jogar baixando o jogo, online, ou testar o jogo!</p>

            {/* Itens da loja*/}
            <div className="container itens loja">
                
                <div className="row card-inicio">                    
                    <ItemListByCategory />
                </div>
            </div>
        </div>

    )
}