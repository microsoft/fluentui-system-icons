import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 10a2 2 0 012 2h-.5c-.18 0-.34.03-.5.09V12a1 1 0 00-1-1H4a1 1 0 00-1 1v1.5C3 14.9 4.58 16 7.5 16c1.56 0 2.74-.31 3.5-.82v1.14c-.9.43-2.09.68-3.5.68C4.09 17 2 15.55 2 13.5V12c0-1.1.9-2 2-2h7zm6.5 2c.18 0 .34.03.5.09V12a2 2 0 00-2-2h-2.76a3 3 0 01.59 1H16a1 1 0 011 1h.5zM7.5 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 1a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm7 1a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-2 8a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 2a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 2a.5.5 0 000 1h5a.5.5 0 000-1h-5z" fill={primaryFill} /></svg>;
}

const PeopleListRegular = wrapIcon(rawSvg({}), 'PeopleListRegular');
export default PeopleListRegular;
      