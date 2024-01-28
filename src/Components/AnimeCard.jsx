import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { Box, Image, Text } from "@chakra-ui/react";

const AnimeCard = ({ anime }) => {
  //usedrag to make the animecard draggable
  const [{ isDragging }, drag] = useDrag({
    type: "Animecard",
    item: { anime }, //data attached to drag item
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(), //specifies whether the item is dragging or not
    }),
  });

  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        ref={drag}
        // Center on mobile, use auto margin on larger screens
      >
        <Image
          src={anime.images.jpg.image_url}
          alt={anime.title}
          mx="auto"
          flex="1"
        />
        <Box p="4">
          <Text fontWeight="semibold" fontSize={"lg"} mb={2}>
            {anime.title}
          </Text>
          <Text>
            Rating: {anime.rating}
            <br />
            Episodes: {anime.episodes}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default AnimeCard;
