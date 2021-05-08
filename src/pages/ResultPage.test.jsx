import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import ResultPage from './ResultPage';

import RESULTS from '../../fixtures/results';

jest.mock('../assets/images');

test('ResultPage', () => {
  useSelector.mockImplementation((selector) => selector({
    result: {
      first: RESULTS[0],
      second: RESULTS[1],
      three:RESULTS[2],
      last: RESULTS[3],
    },
  }));

  const { getByText } = render((
    <MemoryRouter>
      <ResultPage />
    </MemoryRouter>
  ));

  expect(getByText(/What_is_your_company?/)).not.toBeNull();
});
