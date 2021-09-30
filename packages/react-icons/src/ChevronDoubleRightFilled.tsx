import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.73 4.2a.75.75 0 011.06.03l5 5.25c.28.3.28.75 0 1.04l-5 5.25a.75.75 0 11-1.08-1.04L13.2 10l-4.5-4.73a.75.75 0 01.02-1.06zm-4 0a.75.75 0 011.06.03l5 5.25c.28.3.28.75 0 1.04l-5 5.25a.75.75 0 11-1.08-1.04L9.2 10l-4.5-4.73a.75.75 0 01.02-1.06z" fill={primaryFill} /></svg>;
}

const ChevronDoubleRightFilled = wrapIcon(rawSvg({}), 'ChevronDoubleRightFilled');
export default ChevronDoubleRightFilled;
      