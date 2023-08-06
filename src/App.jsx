import { Post } from './Post'
import { Header } from './components/Header'
import './global.css'

export function App() {
  return (
      <>
        <Header />
        <Post 
          team="Vasco" 
          title="Contratações do Vasco: veja quem chega e quem sai na segunda janela de 2023" 
          content="Com a promessa de corrigir a rota e se recuperar do mau início no Campeonato Brasileiro de 2023, o Vasco está no mercado em busca de reforçar o elenco nesta segunda janela de transferências, que fecha no dia 2 de agosto. O clube também terá saídas."
        />
        <Post 
          team="Flamengo" 
          title="Sampaoli conversa com elenco do Flamengo, e maioria dos jogadores reprova ausência de Pedro" 
          content="A manhã no Ninho do Urubu poderia ter sido mais tranquila se não fosse a ausência de Pedro na reapresentação do Flamengo. Antes da atividade, Sampaoli realizou um bate-papo com o elenco para tratar a saída de Pablo Fernández, preparador físico que agrediu o camisa 9 com um soco."
        />
        <Post 
          team="Botafogo" 
          title="Botafogo aprofunda relação com a torcida em tarde de recorde no Nilton Santos" 
          content="O Botafogo venceu o Coritiba por 4 a 1, gols de Gustavo Sauer (2) e Tiquinho Soares (2), em tarde de recorde de público no Estádio Nilton Santos. Os mais de 43 mil presentes viram uma atuação dominante do líder do Campeonato Brasileiro e retribuíram com apoio incondicional durante os 90 minutos."
        />
        <Post 
          team="Fluminense" 
          title="Fluminense treina no CT do Boca Jrs e registra encontro de Riquelme com Marcelo e Cano" 
          content="Momentos depois da primeira publicação, o clube também fez um registro de uma conversa do ex-jogador argentino com Ganso, Marcelo, Felipe e Cano. Os jogadores do Flu foram presenteados com camisas do Boca."
        />
      </>
  )
}
