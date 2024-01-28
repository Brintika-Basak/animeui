import React from "react";
import { Input } from "@chakra-ui/react";
const SearchBar = ({ searchQuery, onSearchChange }) => {
  //console.log("searchQuery:", searchQuery);
  return (
    <>
      <Input
        type="text"
        placeholder="Search anime by title"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        mb="4"
      />
    </>
  );
};

export default SearchBar;
