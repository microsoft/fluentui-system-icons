import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 8c.17 0 .35.03.5.09-.2.07-.38.19-.54.34l-2.03 2a1.5 1.5 0 000 2.14l.41.4c-.25.02-.5.03-.78.03C3.45 13 2 12.1 2 10.27V9.5C2 8.67 2.67 8 3.5 8h5z" fill={primaryFill} /><path d="M6 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill={primaryFill} /><path d="M11 3a2 2 0 110 4 2 2 0 010-4z" fill={primaryFill} /><path d="M7 11.5c0 .14.05.26.15.36l2 2a.5.5 0 00.7-.71L8.72 12h4.58l-1.14 1.15a.5.5 0 10.7.7l2-2a.5.5 0 000-.7l-2-2a.5.5 0 00-.7.7L13.29 11H8.71l1.15-1.14a.5.5 0 00-.71-.7l-2 1.99a.5.5 0 00-.15.35z" fill={primaryFill} /></svg>;
}

const PeopleSwap16Filled = wrapIcon(rawSvg({}), 'PeopleSwap16Filled');
export default PeopleSwap16Filled;
      