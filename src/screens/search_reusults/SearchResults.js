import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { listResults } from "../../actions/searchActions";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
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
      <h3>
        {results?.products?.length} Results for: {searchWord}
      </h3>
      {loading && <h5>Searching ....</h5>}
      <ul>
        {!loading &&
          results?.products?.map((result) => (
            <li key={result._id}>
              <IoCheckmarkDoneCircle style={{ height: "30px" }} />
              {result?.name}
              {result?.category.name && (
                <span className="chip chip__category">
                  {result?.category.name}
                </span>
              )}
              {result?.subject?.name && (
                <span className="chip chip__subject">
                  {result?.subject?.name}
                </span>
              )}
              {result?.heading?.name && (
                <span className="chip chip__heading">
                  {result?.heading?.name}
                </span>
              )}
              {result?.author && (
                <span className="chip chip__author">{result?.author}</span>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchResults;
