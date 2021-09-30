import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 2.5a.5.5 0 00-1 0V3c0 .4.12.77.32 1.08A3 3 0 006 7h-.5A1.5 1.5 0 014 5.5v-2a.5.5 0 00-1 0v2A2.5 2.5 0 005.5 8H6v1.5H2.5a.5.5 0 000 1H6V12h-.5A2.5 2.5 0 003 14.5v2a.5.5 0 001 0v-2c0-.83.67-1.5 1.5-1.5H6a4 4 0 008 0h.5c.83 0 1.5.67 1.5 1.5v2a.5.5 0 001 0v-2a2.5 2.5 0 00-2.5-2.5H14v-1.5h3.5a.5.5 0 000-1H14V8h.5A2.5 2.5 0 0017 5.5v-2a.5.5 0 00-1 0v2c0 .83-.67 1.5-1.5 1.5H14a3 3 0 00-2.32-2.92A2 2 0 0012 3v-.5a.5.5 0 00-1 0V3a1 1 0 11-2 0v-.5z" fill={primaryFill} /></svg>;
}

const BugFilled = wrapIcon(rawSvg({}), 'BugFilled');
export default BugFilled;
      