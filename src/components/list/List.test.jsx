import React from 'react';
import { render, cleanup, act } from '@testing-library/react';
import List from './List';
import { MemoryRouter } from 'react-router-dom';

describe('List component', () => {

  afterEach(() => cleanup());

  test('snpashot test for List', () => {
    const { asFragment } = render(<MemoryRouter>
      <List match={{ params: { api: 'avatar' } }}/>
    </MemoryRouter>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('user clicks on the next page', async () => {
    const { findByText } = await render(<MemoryRouter>
      <List match={{ params: { api: 'avatar' } }}/>
    </MemoryRouter>);

    const nextPageButton = await findByText('→');

    act(() => nextPageButton.click());

    expect(await findByText('Banished servant')).toBeInTheDocument();
  });
  
});
