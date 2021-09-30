import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 4.5c0 .17-.02.34-.05.5H10a1 1 0 011 1v2h-1a2 2 0 00-2 2v1H6a1 1 0 01-1-1V6.95a2.51 2.51 0 01-1 0V10c0 1.1.9 2 2 2h2v2c0 1.1.9 2 2 2h3.05a2.51 2.51 0 010-1H10a1 1 0 01-1-1v-2h1a2 2 0 002-2V9h2a1 1 0 011 1v3.05a2.51 2.51 0 011 0V10a2 2 0 00-2-2h-2V6a2 2 0 00-2-2H6.95c.03.16.05.33.05.5zM11 9v1a1 1 0 01-1 1H9v-1a1 1 0 011-1h1z" fill={primaryFill} /><path d="M6 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M17 15.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M17 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M6 15.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /></svg>;
}

const GroupRegular = wrapIcon(rawSvg({}), 'GroupRegular');
export default GroupRegular;
      