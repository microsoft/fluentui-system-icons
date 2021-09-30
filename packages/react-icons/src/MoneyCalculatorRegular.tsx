import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 6a2 2 0 100 4 2 2 0 000-4zM8 8a1 1 0 112 0 1 1 0 01-2 0zM2 4.5C2 3.67 2.67 3 3.5 3h11c.83 0 1.5.67 1.5 1.5V8h-1V7h-1a2 2 0 01-2-2V4H6v1a2 2 0 01-2 2H3v2h1a2 2 0 012 2v1h5v1H3.5A1.5 1.5 0 012 11.5v-7zM3.5 4a.5.5 0 00-.5.5V6h1a1 1 0 001-1V4H3.5zm11 0H13v1a1 1 0 001 1h1V4.5a.5.5 0 00-.5-.5zm-11 8H5v-1a1 1 0 00-1-1H3v1.5c0 .28.22.5.5.5zM17 8V5.09c.58.2 1 .76 1 1.41V8h-1zm-6 6v1H5.5a1.5 1.5 0 01-1.41-1H11zm2.5-5c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-4zm0 4h1a.5.5 0 010 1h-1a.5.5 0 010-1zm3 0h1a.5.5 0 010 1h-1a.5.5 0 010-1zm-3 2h1a.5.5 0 010 1h-1a.5.5 0 010-1zm3 0h1a.5.5 0 010 1h-1a.5.5 0 010-1zm-3 2h1a.5.5 0 010 1h-1a.5.5 0 010-1zm3 0h1a.5.5 0 010 1h-1a.5.5 0 010-1zM13 10.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v1a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-1z" fill={primaryFill} /></svg>;
}

const MoneyCalculatorRegular = wrapIcon(rawSvg({}), 'MoneyCalculatorRegular');
export default MoneyCalculatorRegular;
      