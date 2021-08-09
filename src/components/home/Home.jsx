import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import APIs from '../../data/characterAPIs.json';

const Home = () => {
  return (<>
    <Header/>
    <main className="Home">
      What characters would you like to see?
      <ul>
        {Object.keys(APIs).map(key => <li key={key}>
          <Link to={`/list/${key}`}>
            {APIs[key].name}
          </Link> ({APIs[key].count})
        </li>)}
      </ul>
    </main>
  </>);
};

export default Home;
