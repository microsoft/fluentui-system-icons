import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.93 9.75a.75.75 0 00-1.47-.28 2.48 2.48 0 01-1.95 1.98.75.75 0 10.31 1.47 3.98 3.98 0 003.1-3.17z" fill={primaryFill} /><path d="M6 2.75c0-.41.34-.75.75-.75h10.5c.41 0 .75.34.75.75v6.5c0 3.2-2.4 5.83-5.5 6.2v5.06l2.75-.01a.75.75 0 010 1.5l-3.5.01-3-.01a.75.75 0 010-1.5H11v-5.05a5.75 5.75 0 01-5-5.7v-7zm1.5.75v2.75h9V3.5h-9zm0 6.25C7.5 12.1 9.4 14 11.75 14a4.75 4.75 0 004.75-4.75v-1.5h-9v2z" fill={primaryFill} /></svg>;
}

const DrinkWine24Regular = wrapIcon(rawSvg({}), 'DrinkWine24Regular');
export default DrinkWine24Regular;
      