import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2.5c0-.28.22-.5.5-.5h4a.5.5 0 01.42.78L4.93 8H8a.5.5 0 110 1H4a.5.5 0 01-.42-.78L7.07 3H4a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M13.5 2c.28 0 .5.22.5.5v13.8l3.15-3.15a.5.5 0 01.7.7l-4 4a.5.5 0 01-.7 0l-4-4a.5.5 0 01.7-.7L13 16.29V2.5c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M6 10c.2 0 .39.13.47.32l2.75 7a.5.5 0 11-.94.36L7.62 16H4.38l-.66 1.68a.5.5 0 01-.94-.36l2.75-7A.5.5 0 016 10zm-1.23 5h2.46L6 11.87 4.77 15z" fill={primaryFill} /></svg>;
}

const TextSortDescendingRegular = wrapIcon(rawSvg({}), 'TextSortDescendingRegular');
export default TextSortDescendingRegular;
      