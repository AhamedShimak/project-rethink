import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { listResults } from '../../actions/searchActions';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { ReactComponent as Pulse } from '../../assets/Pulse.svg';

import './searchResluts.css';
const SearchResults = () => {
  let history = useHistory();

  const dispatch = useDispatch();
  const { searchWord, loading, errors, results } = useSelector(
    (state) => state.searchResults
  );

  useEffect(() => {
    setShowResult({
      noresult: false,
      labs: true,
      videos: true,
    });
    const fetchData = async () => {
      listResults(dispatch, searchWord);
    };
    if (searchWord !== '' && searchWord !== undefined) {
      fetchData();
    }
  }, [searchWord, dispatch]);

  const [showResult, setShowResult] = useState({
    noresult: false,
    labs: true,
    videos: true,
  });
  const [activeall, setActiveall] = useState('blue');
  const [activelabs, setActivelabs] = useState('green');
  const [activevideo, setActivevideo] = useState('green');

  useEffect(() => {}, [showResult]);

  return (
    <div className="search__results">
      {loading && <Pulse />}
      {results?.products?.length + results?.labs?.length != 0 ||
      Number.isNaN(results?.products?.length + results?.labs?.length) ? (
        <div>
          <h3>
            {results?.products?.length + results?.labs?.length} Results for:{' '}
            {searchWord}
          </h3>
          <small>
            {results?.products?.length} Videos {results?.labs?.length} Labs
          </small>
          <hr style={{ marginBottom: '2px' }}></hr>

          <span
            style={{ backgroundColor: activeall }}
            className="chip chip__subject"
            onClick={() => (
              setShowResult({
                noresult: false,
                labs: true,
                videos: true,
              }),
              setActiveall('blue'),
              setActivelabs('green'),
              setActivevideo('green')
            )}
          >
            All
          </span>
          <span
            style={{ backgroundColor: activelabs }}
            className="chip chip__subject"
            onClick={() => (
              setShowResult({
                noresult: true,
                labs: true,
                videos: false,
              }),
              setActiveall('green'),
              setActivelabs('blue'),
              setActivevideo('green')
            )}
          >
            Labs
          </span>
         
          <span
            style={{ backgroundColor: activevideo }}
            className="chip chip__subject"
            onClick={() => (
              setShowResult({
                noresult: true,
                labs: false,
                videos: true,
              }),
              setActiveall('green'),
              setActivelabs('green'),
              setActivevideo('blue')
            )}
          >
            Videos
          </span>

          <hr style={{ marginBottom: '10px', marginTop: '2px' }}></hr>
        </div>
      ) : (
        <div className="search__no__result">
          <img
            src={process.env.PUBLIC_URL + '/assets/no_result.png'}
            alt="no result"
            className="no__result"
          />
        </div>
      )}


      {!loading && showResult.labs && (results?.labs?.length != 0 ||  showResult.noresult) && <div className="search__no__result">
          <img
            src={process.env.PUBLIC_URL + '/assets/no_result.png'}
            alt="no result"
            className="no__result"
          />
        </div>  }
        
        {!loading && showResult.products && (results?.products?.length != 0 ||  showResult.noresult) && <div className="search__no__result">
          <img
            src={process.env.PUBLIC_URL + '/assets/no_result.png'}
            alt="no result"
            className="no__result"
          />
        </div>  }



      <ul> 
        {((!loading) &&  
          showResult.labs &&
          results?.labs?.map((result) => (
           
            <li
              key={result._id}
              onClick={() => history.push(`/labs/lab/${result._id}`)}
            >
              <IoCheckmarkDoneCircle style={{ height: '30px' }} />
              {result?.name}
              {result?.category.name && (
                <span className="chip chip__category">Labs</span>
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
          )))
          }
        {!loading && 
          showResult.videos &&
          results?.products?.map((result) => (
            <li
              key={result._id}
              onClick={() => history.push(`/lessons/${result.heading._id}`)}
            >
              <IoCheckmarkDoneCircle style={{ height: '30px' }} />
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
