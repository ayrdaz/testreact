import React from 'react';

import { useSelector } from 'react-redux';

import Result from '../components/Result';

import { get } from '../utils';

export default function ResultContainer({ handleClickLink }) {
  const { first, second,three, last } = useSelector(get('result'));

  return (
    <>
      <Result
        first={first}
        second={second}
        three={three}
        last={last}
        handleClick={handleClickLink}
      />
    </>
  );
}
