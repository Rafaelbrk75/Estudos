import Card from "./components/Card"
import swposterImg from "./assets/sw-poster.jpg"
import lotrposterImg from "./assets/poster-senhor-dos-aneis.jpg"
import hpPosterImg from "./assets/poster-harry-potter.jpg"

export default function App() {
  return (
    <div>
      <Card title="Pôster do filme Star Wars" posterImg={swposterImg}
      description="Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!" />
      <Card title="Pôster do filme O Senhor dos Anéis" posterImg={lotrposterImg}
      description="Um pôster incrível do filme O Senhor dos Anéis, com moldura de MDF e tamanho A3. Uma peça de decoração perfeita para os fãs da Terra Média. Este pôster captura a essência da aventura épica e da amizade que define a trilogia. Adicione um toque de magia à sua casa com este item de colecionador!" />
      <Card title="Pôster do filme Harry Potter" posterImg={hpPosterImg}
      description="Um pôster encantador do filme Harry Potter, com moldura de MDF e tamanho A3. Uma lembrança mágica do mundo bruxo que cativou gerações. Este pôster traz a magia e a aventura de Hogwarts para a sua parede. Não perca a chance de ter essa peça única em sua coleção!" />
    </div>
  )
}