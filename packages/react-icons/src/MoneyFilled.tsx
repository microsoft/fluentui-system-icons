import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 4C2.67 4 2 4.67 2 5.5v7c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-11zM6 5v1a2 2 0 01-2 2H3V7h1a1 1 0 001-1V5h1zm3 5.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM3 11v-1h1a2 2 0 012 2v1H5v-1a1 1 0 00-1-1H3zm11 0a1 1 0 00-1 1v1h-1v-1c0-1.1.9-2 2-2h1v1h-1zm0-4h1v1h-1a2 2 0 01-2-2V5h1v1a1 1 0 001 1z" fill={primaryFill} /><path d="M17 12.5a2.5 2.5 0 01-2.5 2.5H4.09c.2.58.76 1 1.41 1h9a3.5 3.5 0 003.5-3.5v-5c0-.65-.42-1.2-1-1.41v6.41z" fill={primaryFill} /></svg>;
}

const MoneyFilled = wrapIcon(rawSvg({}), 'MoneyFilled');
export default MoneyFilled;
      