import React, { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";

export default function NewComment({ addComment }) {
  const [email, setEmail] = useState("");
  const [coment, setComent] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addComment({ email, coment });
    setEmail("");
    setComent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        id="email"
        label="Email"
        type="email"
        value={email}
        setValue={setEmail}
      />
      <TextInput
        id="coment"
        label="Comentário"
        isTextarea={true}
        value={coment}
        setValue={setComent}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

NewComment.propTypes = {
  addComment: PropTypes.func.isRequired
};
