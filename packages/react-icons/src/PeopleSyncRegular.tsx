import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 10c.1 0 .2 0 .3.02-.39.28-.74.61-1.04.98H4a1 1 0 00-1 1v1.5C3 14.9 4.58 16 7.5 16c.62 0 1.17-.05 1.67-.14.08.33.2.65.34.95-.6.12-1.28.19-2.01.19C4.09 17 2 15.55 2 13.5V12c0-1.1.9-2 2-2h7zm6-3.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM14.5 5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-7-3a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 1a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm7 16a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm1.5-7v.15a3.01 3.01 0 00-3.62.48.5.5 0 00.7.7 2 2 0 012.39-.33H15a.5.5 0 000 1h1.5a.5.5 0 00.5-.5V12a.5.5 0 00-1 0zm-1.55 5.25a3 3 0 002.17-.88.5.5 0 00-.7-.7 2 2 0 01-2.39.33H14a.5.5 0 000-1h-1.5a.5.5 0 00-.5.5V17a.5.5 0 001 0v-.15a3.01 3.01 0 001.45.4z" fill={primaryFill} /></svg>;
}

const PeopleSyncRegular = wrapIcon(rawSvg({}), 'PeopleSyncRegular');
export default PeopleSyncRegular;
      