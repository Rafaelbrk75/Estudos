import { useState } from "react";

export default function useArmazena() {
    const [comentarios, setComentarios] = useState(() => {
        const storedComment = localStorage.getItem("obc-comment-lib")
        if (!storedComment) return []
        const commentArray = JSON.parse(storedComment)
        return commentArray
    })

    const adicionarComentario = ({ email, coment }) => {
        const id = Math.floor(Math.random() * 10000)
        const comentario = { id, email, comment: coment }
        setComentarios(state => {
            const newState = [...state, comentario]
            localStorage.setItem("obc-comment-lib", JSON.stringify(newState))
            return newState
        })
    }

    return { comentarios, adicionarComentario }
}