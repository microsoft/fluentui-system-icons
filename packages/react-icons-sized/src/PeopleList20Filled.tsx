import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 10a2 2 0 012 2h-.5c-.83 0-1.5.67-1.5 1.5v2.82c-.9.43-2.09.68-3.5.68C4.09 17 2 15.55 2 13.5V12c0-1.1.9-2 2-2h7zm6.5 2c.18 0 .34.03.5.09V12a2 2 0 00-2-2h-2.76l.13.16c.4.51.63 1.15.63 1.84h3.5zM7.5 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm7 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-2 9a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 2a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 2a.5.5 0 000 1h5a.5.5 0 000-1h-5z" fill={primaryFill} /></svg>;
}

const PeopleList20Filled = wrapIcon(rawSvg({}), 'PeopleList20Filled');
export default PeopleList20Filled;
      