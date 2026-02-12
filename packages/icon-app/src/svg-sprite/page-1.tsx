import * as React from 'react';

import popcornSvg from './assets/popcorn.svg';
import { SvgIcon } from './svg-icon';

export const Page1 = () => {
  return (
    <div>
      <b>Page 1</b>
      <SvgIcon id={popcornSvg} />
      <img src={popcornSvg} alt="Popcorn SVG" />
    </div>
  );
};
