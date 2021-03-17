import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const initialMovie = {
  title: "",
  director: "",
  metascore: "",
  stars: [],
};

function UpdateMovie() {
  const [editMovie, setEditMovie] = useState(initialMovie);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => {
        setEditMovie(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setEditMovie({ ...editMovie, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${id}`, editMovie)
      .then((res) => setEditMovie(res.data))
      .catch((err) => console.log(err));

    history.push(`/movies/${id}`);
  };

  return (
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={editMovie.title}
        />

        <input
          type="text"
          name="director"
          placeholder="Director"
          onChange={handleChange}
          value={editMovie.director}
        />

        <input
          type="number"
          name="metascore"
          placeholder="Metascore"
          onChange={handleChange}
          value={editMovie.metascore}
        />

        <input
          type="text"
          name="stars"
          placeholder="Actors"
          onChange={handleChange}
          value={editMovie.stars}
        />

        <button>Update</button>
      </form>
    </div>
  );
}

export default UpdateMovie;
