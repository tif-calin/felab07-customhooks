import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

describe('App component', () => {

  afterEach(() => cleanup());

  test('renders App', () => {
    const { asFragment } = render(<App/>);
    expect(asFragment()).toMatchSnapshot();
  });

});
