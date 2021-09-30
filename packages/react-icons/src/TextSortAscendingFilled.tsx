import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2c.32 0 .6.2.7.5L8.97 9a.75.75 0 11-1.42.5l-.34-1H4.8l-.34 1A.75.75 0 013.04 9L5.3 2.5c.1-.3.4-.5.71-.5zm-.68 5h1.36L6 5.04 5.32 7z" fill={primaryFill} /><path d="M13.5 2c.41 0 .75.34.75.75v12.77l2.49-2.32a.75.75 0 011.02 1.1l-3.75 3.5a.75.75 0 01-1.02 0l-3.75-3.5a.75.75 0 111.02-1.1l2.49 2.32V2.75c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M3.25 11.75c0-.41.34-.75.75-.75h4a.75.75 0 01.6 1.2l-3.13 4.3H8A.75.75 0 018 18H4a.75.75 0 01-.6-1.2l3.13-4.3H4a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const TextSortAscendingFilled = wrapIcon(rawSvg({}), 'TextSortAscendingFilled');
export default TextSortAscendingFilled;
      