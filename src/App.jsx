import React, { useState, useEffect } from "react";
import AnimeApi from "./Components/AnimeApi";
import AnimeList from "./Components/AnimeList";
import SearchBar from "./Components/SearchBar";
import Filter from "./Components/Filter";
import Watchlist from "./Components/WatchList";
import { Box, Flex, CircularProgress } from "@chakra-ui/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const App = () => {
  //states
  const [animeList, setAnimeList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState("");
  const [allGenres, setAllGenres] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  //fetch genres when animelist updated
  useEffect(() => {
    const genres = [
      ...new Set(
        animeList.flatMap((anime) => anime.genres.map((genre) => genre.name))
      ),
    ];
    setAllGenres(genres);
  }, [animeList]);

  //logic to show titles based on searchquery and drop-down
  const filterAnimeList = animeList
    .filter((anime) =>
      anime.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (anime) =>
        selectedGenres === "" ||
        anime.genres.some((genre) => genre.name === selectedGenres)
    );
  return (
    <DndProvider backend={HTML5Backend}>
      <>
        <Box p={{ base: 4, md: 8, lg: 12 }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            //align={{ base: "stretch", md: "flex-start" }}
          >
            <Box
              position={{ md: "sticky" }}
              top={{ md: "0" }}
              p={{ base: "4", md: "8" }}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              textAlign="center"
              height="20%"
              width={{ base: "100%", md: "20%" }}
              backgroundColor="white"
              mb={{ base: 4, md: 0 }}
            >
              <Watchlist
                watchlist={watchlist}
                onWatchlistUpdate={setWatchlist}
              />
            </Box>
            <Box flex="1" ml={{ base: "0", md: "4" }}>
              <AnimeApi setAnimeList={setAnimeList} />
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
              <Filter
                genres={allGenres}
                selectedGenres={selectedGenres}
                onChangeGenre={setSelectedGenres}
              />
              <AnimeList animeList={filterAnimeList} />
            </Box>
          </Flex>
        </Box>
      </>
    </DndProvider>
  );
};

export default App;
