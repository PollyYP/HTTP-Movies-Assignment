import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const initialState = {
  title: "",
  director: "",
  metascore: "",
  stars: [],
};

function AddMovie() {
  const [input, setInput] = useState(initialState);
  const history = useHistory();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setInput({ ...input, [name]: value });
  };

  const addNewMovie = (event) => {
    event.preventDefault();
    const newMovie = {
      title: input.title,
      director: input.director,
      metascore: input.metascore,
      stars: input.stars.split(","),
    };

    axios
      .post("http://localhost:5000/api/movies", newMovie)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    history.push("/");
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={addNewMovie}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={input.title}
        />

        <input
          type="text"
          name="director"
          placeholder="Director"
          onChange={handleChange}
          value={input.director}
        />

        <input
          type="number"
          name="metascore"
          placeholder="Metascore"
          onChange={handleChange}
          value={input.metascore}
        />

        <input
          type="text"
          name="stars"
          placeholder="Actors"
          onChange={handleChange}
          value={input.stars}
        />

        <button>Add</button>
      </form>
    </div>
  );
}

export default AddMovie;
