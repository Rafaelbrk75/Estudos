import Comment from "./components/Comment"
import NewComment from "./components/NewComment"
import useArmazena from "./hooks/useArmazena"

export default function App() {
  const { comentarios, adicionarComentario } = useArmazena()

  return (
    <div id="app">
      <h2>Seção de Comentários</h2>
      <NewComment addComment={adicionarComentario} />
      <div className="comments">
        {comentarios.length > 0
          ? comentarios.map((comentario, index) => (
          <Comment 
            key={index} 
            email={comentario.email} 
            comment={comentario.comment} 
          />
        )) : (
          <p>Seja o primeiro a comentar!</p>
        )}
      </div>
    </div>
  )
}
