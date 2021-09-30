import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 13C9.99 13 11 14 11 15.25v3.5C11 19.99 10 21 8.75 21h-3.5C4.01 21 3 20 3 18.75v-3.5C3 14.01 4 13 5.25 13h3.5zm10 0c1.24 0 2.25 1 2.25 2.25v3.5c0 1.24-1 2.25-2.25 2.25h-3.5C14.01 21 13 20 13 18.75v-3.5c0-1.24 1-2.25 2.25-2.25h3.5zm-10-10C9.99 3 11 4 11 5.25v3.5C11 9.99 10 11 8.75 11h-3.5C4.01 11 3 10 3 8.75v-3.5C3 4.01 4 3 5.25 3h3.5zm10 0C19.99 3 21 4 21 5.25v3.5C21 9.99 20 11 18.75 11h-3.5C14.01 11 13 10 13 8.75v-3.5C13 4.01 14 3 15.25 3h3.5z" fill={primaryFill} /></svg>;
}

const Grid24Filled = wrapIcon(rawSvg({}), 'Grid24Filled');
export default Grid24Filled;
      