import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.17 3.97C2.52 3.97 2 4.49 2 5.14V10a6 6 0 0011.92 1H15a3 3 0 100-6h-1a1.17 1.17 0 00-1.17-1.03H3.17zM3 5.14c0-.1.08-.17.17-.17h9.66c.1 0 .17.07.17.17V10a5 5 0 01-10 0V5.14zM14 6h1a2 2 0 110 4h-1V6z" fill={primaryFill} /></svg>;
}

const DrinkCoffeeRegular = wrapIcon(rawSvg({}), 'DrinkCoffeeRegular');
export default DrinkCoffeeRegular;
      