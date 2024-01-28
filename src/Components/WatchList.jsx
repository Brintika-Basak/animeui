import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { Box, Center, CloseButton, Flex, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import AnimeCard from "./AnimeCard";

const Watchlist = () => {
  const [watchlist, onWatchlistUpdate] = useState(
    //retrieve watchlist from local storage
    JSON.parse(localStorage.getItem("watchlist")) || []
  );
  useEffect(() => {
    //save watchlist to local storage when change
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);
  //usedrop hook
  const [{ isOver }, drop] = useDrop({
    accept: "Animecard",
    //when animecard dropped into watchlist
    drop: (item) => {
      const updatedWatchList = [...watchlist, item.anime];
      onWatchlistUpdate(updatedWatchList);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  //function to remove watchlist
  const removeFromWatchlist = (animeId) => {
    const updatedWatchList = watchlist.filter(
      (anime) => anime.mal_id !== animeId
    );

    onWatchlistUpdate(updatedWatchList);
  };
  return (
    <>
      <Box
        p={4}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        textAlign="center"
        height="100%"
        width="100%"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
        ref={drop}
        backgroundColor={isOver ? "gray.200" : "white"}
        transition="background-color 0.3s"
        borderColor="GrayText"
      >
        <h2>Watchlist</h2>

        {/*  <Box display="flex" flexWrap="wrap" justifyContent="space-evenly"> */}
        <Flex flexWrap="wrap" justifyContent="space-evenly">
          {watchlist.map((anime) => (
            <Box
              key={anime.mal_id}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              overflow="hidden"
              position="relative"
              mb={4}
              _hover={{ boxShadow: "lg" }}
            >
              <AnimeCard key={anime.mal_id} anime={anime} />
              <IconButton
                icon={<DeleteIcon />}
                colorScheme="red"
                size="sm"
                position="absolute"
                top="5"
                right="5"
                onClick={() => removeFromWatchlist(anime.mal_id)}
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Watchlist;
