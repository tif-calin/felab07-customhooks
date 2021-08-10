import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home component', () => {

  afterEach(() => cleanup());

  test('renders Home', () => {
    const { asFragment } = render(<MemoryRouter>
      <Home/>
    </MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
  
});
