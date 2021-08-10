import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header component', () => {

  afterEach(() => cleanup());

  test('renders Header', async () => {
    const { asFragment } = await render(<MemoryRouter>
      <Header/>
    </MemoryRouter>);

    expect(asFragment()).toMatchSnapshot();
  });
  
});
