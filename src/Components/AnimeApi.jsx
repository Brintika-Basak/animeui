import { useEffect, useState } from "react";
import axios from "axios";

const AnimeApi = ({ setAnimeList }) => {
  const apiUrl = "https://api.jikan.moe/v4/anime";

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await axios.get(apiUrl);
        //console.log("fetched data", response.data);
        setAnimeList(response.data.data);
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };

    fetchAnimeData();
  }, [setAnimeList]);
  return null;
};

export default AnimeApi;

/* if (response.data && Array.isArray(response.data.data)) {
          setAnimeList(response.data.data);
          //log genres
          const genres = response.data.data.flatMap(
            (anime) => anime.genres || []
          );
          console.log("genres:", genres);
        } else {
          console.error("Invalid data:", response.data);
        }*/
