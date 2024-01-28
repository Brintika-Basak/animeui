import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";

const AnimeList = ({ animeList }) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacingX="6" spacingY="6">
      {animeList.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </SimpleGrid>
  );
};

export default AnimeList;
