import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.5A3.5 3.5 0 016.5 3H9a1 1 0 010 2H6.5C5.67 5 5 5.67 5 6.5V9a1 1 0 11-2 0V6.5z" fill={primaryFill} /><path d="M21 17.5a3.5 3.5 0 01-3.5 3.5H15a1 1 0 110-2h2.5c.83 0 1.5-.67 1.5-1.5V15a1 1 0 112 0v2.5z" fill={primaryFill} /><path d="M21 6.5A3.5 3.5 0 0017.5 3H15a1 1 0 100 2h2.5c.83 0 1.5.67 1.5 1.5V9a1 1 0 102 0V6.5z" fill={primaryFill} /><path d="M6.5 21A3.5 3.5 0 013 17.5V15a1 1 0 112 0v2.5c0 .83.67 1.5 1.5 1.5H9a1 1 0 110 2H6.5z" fill={primaryFill} /><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill={primaryFill} /><path d="M7.5 8.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill={primaryFill} /></svg>;
}

const SearchVisual24Filled = wrapIcon(rawSvg({}), 'SearchVisual24Filled');
export default SearchVisual24Filled;
      