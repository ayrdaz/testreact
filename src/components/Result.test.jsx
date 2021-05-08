import React from 'react';

import { render } from '@testing-library/react';

import Result from './Result';

import RESULTS from '../../fixtures/results';

jest.mock('../assets/images');

test('Result', () => {
  const { getByText } = render((
    <Result
      first={RESULTS[0]}
      second={RESULTS[1]}
      three={RESULTS[2]}
last={RESULTS[3]}
    />
  ));

  expect(getByText(RESULTS[0].description)).not.toBeNull();
  expect(getByText(RESULTS[1].tag)).not.toBeNull();
  expect(getByText(RESULTS[2].tag)).not.toBeNull();
expect(getByText(RESULTS[3].tag)).not.toBeNull();
});
