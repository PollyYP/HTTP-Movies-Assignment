import React from "react";

function UpdateMovie() {
  return (
    <div>
      <h2>Update Movie</h2>
      <form>
        <input type="text" name="title" placeholder="Title" />

        <input type="text" name="director" placeholder="Director" />

        <input type="number" name="metascore" placeholder="Metascore" />

        <input type="text" name="star1" placeholder="Star 1" />

        <input type="text" name="star2" placeholder="Star 2" />

        <input type="text" name="star3" placeholder="Star 3" />

        <button className="">Update</button>
      </form>
    </div>
  );
}

export default UpdateMovie;
