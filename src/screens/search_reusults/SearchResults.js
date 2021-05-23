import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { listResults } from "../../actions/searchActions";
// import { searchSelector } from "../../app/store";

import "./searchResluts.css";
const SearchResults = () => {
  let history = useHistory();

  const dispatch = useDispatch();
  const searchWord = useSelector((state) => state.searchResults.searchWord);
  console.log(searchWord);
  useEffect(() => {
    const fetchData = async () => {
      listResults(dispatch, searchWord);
    };

    fetchData();
  }, [searchWord, dispatch]);

  return <div>Search Results{searchWord && searchWord}</div>;
};

export default SearchResults;
