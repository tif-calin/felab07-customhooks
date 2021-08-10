/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { fetchByPage } from '../services/fetchList.js';
import APIs from '../data/characterAPIs.json';

export const useCharacters = api => {
  const [API] = useState(APIs[api]);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchByPage(api, page)
      .then(res => setCharacters(res))
      .then(() => setLoading(false))
      .catch(err => console.log(err))
    ;
  }, [API, page]);

  return { loading, characters, API, page, setPage };
};
