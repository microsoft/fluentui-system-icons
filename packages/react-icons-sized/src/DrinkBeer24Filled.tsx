import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.25 2A3.25 3.25 0 004 5.25v14.5C4 20.99 5 22 6.25 22h9c1.24 0 2.25-1 2.25-2.25V18h1.25c1.8 0 3.25-1.46 3.25-3.25v-5.5C22 7.45 20.54 6 18.75 6H17.5v-.75c0-1.8-1.46-3.25-3.25-3.25h-7zm11.5 14.5H17.5v-9h1.25c.97 0 1.75.78 1.75 1.75v5.5c0 .97-.78 1.75-1.75 1.75zM16 6H5.5v-.75c0-.97.78-1.75 1.75-1.75h7c.97 0 1.75.78 1.75 1.75V6zm-7.5 4v7A.75.75 0 017 17v-7a.75.75 0 011.5 0zm3 0v7a.75.75 0 01-1.5 0v-7a.75.75 0 011.5 0zm3 0v7a.75.75 0 01-1.5 0v-7a.75.75 0 011.5 0z" fill={primaryFill} /></svg>;
}

const DrinkBeer24Filled = wrapIcon(rawSvg({}), 'DrinkBeer24Filled');
export default DrinkBeer24Filled;
      