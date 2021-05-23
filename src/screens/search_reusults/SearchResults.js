import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { listResults } from "../../actions/searchActions";
// import { searchSelector } from "../../app/store";

import "./searchResluts.css";
const SearchResults = () => {
  let history = useHistory();

  const dispatch = useDispatch();
  const { searchWord, loading, errors, results } = useSelector(
    (state) => state.searchResults
  );

  useEffect(() => {
    const fetchData = async () => {
      listResults(dispatch, searchWord);
    };
    if (searchWord !== "" && searchWord !== undefined) {
      fetchData();
    }
  }, [searchWord, dispatch]);

  return (
    <div className="search__results">
      <h3>Search Results</h3>
      {loading && <h5>Searching ....</h5>}
      <ul>
        {results?.products?.map((result) => (
          <li key={result._id}>
            Name: {result.name} {", "}
            Category:{result.category.name}
            {","}
            Subject: {result.subject.name}
            {" , "} Heading: {result.heading.name}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
