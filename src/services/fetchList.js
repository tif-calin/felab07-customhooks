import APIs from '../data/characterAPIs.json';

const fetchAll = async key => {
  const api = APIs[key];

  return await fetch(api.url + api.endpoints.getAll)
    .then(resp => resp.json())
    .then(json => api.pathToList.reduce((acc, val) => acc[val], json))
  ;
};

const fetchByPage = async (key, page) => {
  const api = APIs[key];

  if (!api.endpoints.getByPage) return (
    fetchAll(key).then(list => list.slice(page * 20, (page + 1) * 20))
  );

  return await fetch(api.url + api.endpoints.getByPage.replace(':splat', page))
    .then(resp => resp.json())
    .then(json => api.pathToList.reduce((acc, val) => acc[val], json))
  ;
};

const fetchById = async (key, id) => {
  const api = APIs[key];

  const result = fetch(api.url + api.endpoints.getById.replace(':splat', id))
    .then(resp => resp.json())
  ;

  return Array.isArray(result) ? result[0] : result;
};

export { fetchAll, fetchByPage, fetchById };
