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
    setShowResult({
      labs: true,
      videos: true,
    });
    const fetchData = async () => {
      listResults(dispatch, searchWord);
    };
    if (searchWord !== "" && searchWord !== undefined) {
      fetchData();
    }
  }, [searchWord, dispatch]);

  const [showResult, setShowResult] = useState({
    labs: true,
    videos: true,
  });

  useEffect(() => {}, [showResult]);

  return (
    <div className="search__results">
      <h3>
        {results?.products?.length + results?.labs?.length} Results for:{" "}
        {searchWord}
      </h3>
      <small>
        {results?.products?.length} Videos {results?.labs?.length} Labs
      </small>
      {loading && <h5>Searching ....</h5>}
      <hr style={{ marginBottom: "2px" }}></hr>
      <span
        className="chip chip__subject"
        onClick={() =>
          setShowResult({
            labs: true,
            videos: true,
          })
        }>
        All
      </span>
      <span
        className="chip chip__subject"
        onClick={() =>
          setShowResult({
            labs: true,
            videos: false,
          })
        }>
        Labs
      </span>
      <span
        className="chip chip__subject"
        onClick={() =>
          setShowResult({
            labs: false,
            videos: true,
          })
        }>
        Videos
      </span>

      <hr style={{ marginBottom: "10px", marginTop: "2px" }}></hr>
      <ul>
        {!loading &&
          showResult.labs &&
          results?.labs?.map((result) => (
            <li
              key={result._id}
              onClick={() => history.push(`/labs/lab/${result._id}`)}>
              <IoCheckmarkDoneCircle style={{ height: "30px" }} />
              {result?.name}
              {result?.category.name && (
                <span className="chip chip__category">Lab</span>
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
            </li>
          ))}
        {!loading &&
          showResult.videos &&
          results?.products?.map((result) => (
            <li key={result._id}>
              <IoCheckmarkDoneCircle style={{ height: "30px" }} />
              {result?.name}
              {result?.category.name && (
                <span className="chip chip__category">Video</span>
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
