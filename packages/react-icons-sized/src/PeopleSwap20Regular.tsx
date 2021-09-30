import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 12a2 2 0 00-2-2H4a2 2 0 00-2 2v1.5C2 15.55 4.09 17 7.5 17c.46 0 .9-.03 1.3-.08l-.36-.36a1.5 1.5 0 01-.36-.58L7.5 16C4.58 16 3 14.9 3 13.5V12a1 1 0 011-1h7a1 1 0 011 1v.09a1.5 1.5 0 011 1.41V12z" fill={primaryFill} /><path d="M18 12.5c0 .43-.07.82-.2 1.19l-.82-.83.02-.36V12a1 1 0 00-1-1h-2.17a3 3 0 00-.6-1H16a2 2 0 012 2v.5z" fill={primaryFill} /><path d="M11 5.5a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0zm-6 0a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" fill={primaryFill} /><path d="M17 6.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zm-4 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" fill={primaryFill} /><path d="M11.15 17.85a.5.5 0 00.7-.7L10.71 16h5.58l-1.14 1.15a.5.5 0 00.7.7l2-2a.5.5 0 000-.7l-2-2a.5.5 0 00-.7.7L16.29 15h-5.58l1.14-1.15a.5.5 0 00-.7-.7l-2 2a.5.5 0 000 .7l2 2z" fill={primaryFill} /></svg>;
}

const PeopleSwap20Regular = wrapIcon(rawSvg({}), 'PeopleSwap20Regular');
export default PeopleSwap20Regular;
      