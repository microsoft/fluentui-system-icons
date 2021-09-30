import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 10c.1 0 .2 0 .3.02a5.5 5.5 0 00-1.8 6.79c-.6.12-1.27.19-2 .19C4.09 17 2 15.55 2 13.5V12c0-1.1.9-2 2-2h7zm6-3.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM7.5 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm7 17a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm1.5-7v.15a3.01 3.01 0 00-3.62.48.5.5 0 00.7.7 2 2 0 012.39-.33H15a.5.5 0 000 1h1.5a.5.5 0 00.5-.5V12a.5.5 0 00-1 0zm-1.55 5.25a3 3 0 002.17-.88.5.5 0 00-.7-.7 2 2 0 01-2.39.33H14a.5.5 0 000-1h-1.5a.5.5 0 00-.5.5V17a.5.5 0 001 0v-.15a3.01 3.01 0 001.45.4z" fill={primaryFill} /></svg>;
}

const PeopleSync20Filled = wrapIcon(rawSvg({}), 'PeopleSync20Filled');
export default PeopleSync20Filled;
      