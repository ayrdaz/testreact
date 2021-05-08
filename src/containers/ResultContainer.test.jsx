import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import ResultContainer from './ResultContainer';

import RESULTS from '../../fixtures/results';

jest.mock('../assets/images');

test('ResultContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    result: {
      first: RESULTS[0],
      second: RESULTS[1],
      third: RESULTS[2],
      last: RESULTS[3],
    },
  }));

  const { getByText } = render((
    <MemoryRouter>
      <ResultContainer />
    </MemoryRouter>
  ));

  expect(getByText(RESULTS[0].description)).not.toBeNull();
  expect(getByText(RESULTS[1].tag)).not.toBeNull();
  expect(getByText(RESULTS[2].tag)).not.toBeNull();
  expect(getByText(RESULTS[3].tag)).not.toBeNull();
});
