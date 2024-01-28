import React from "react";
import { Select } from "@chakra-ui/react";
const Filter = ({ genres, selectedGenres, onChangeGenre }) => {
  //console.log("Genres:", genres);
  return (
    <>
      <Select
        value={selectedGenres}
        onChange={(e) => onChangeGenre(e.target.value)}
        fontSize="sm"
        px={2}
        py={2}
        mb="4"
      >
        <option key="allGenres" value="">
          All Genres
        </option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </Select>
    </>
  );
};

export default Filter;
