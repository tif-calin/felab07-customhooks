import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import { useCharacters } from '../../state/listsOfThings.js';

const List = props => {

  const state = useCharacters(props.match.params.api); 
  const { loading, characters, API, page, setPage } = state;

  return <>
    <Header/>
    {loading
      ? <div>Loading...</div>
      : <>
        <h3>{API.name}</h3>
        <p>
          <button 
            onClick={() => setPage(Math.max(page - 1, 1))}
          >&#x2190;</button>
          <span>{page}</span>
          <button 
            onClick={() => setPage(Math.min(page + 1, ~~(API.count / 20)))}
          >&#x2192;</button>
        </p>
        <ul className="List">
          {characters.map(character => <li key={character[API.id]}>
            <img src={character[API.image]} alt={character[API.title]}/>
            <span>{Array.isArray(API.title) 
              ? API.title.reduce((acc, val) => acc[val], character)
              : character[API.title]
            }</span>
          </li>)}
        </ul>
      </>
    }
  </>;
};

List.propTypes = {
  match: PropTypes.object.isRequired
};

export default List;
