import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 6a4 4 0 118 0 4 4 0 01-8 0zm-3 7a2 2 0 012-2h8.67a3 3 0 00-.17 1v.06A2 2 0 0011 14v3.84c-.64.1-1.31.16-2 .16a9.14 9.14 0 01-4.87-1.2A4.35 4.35 0 012 13zm11.5 0v-1a2 2 0 114 0v1h.5a1 1 0 011 1v4a1 1 0 01-1 1h-5a1 1 0 01-1-1v-4a1 1 0 011-1h.5zm1-1v1h2v-1a1 1 0 10-2 0zm1.75 4a.75.75 0 10-1.5 0 .75.75 0 001.5 0z" fill={primaryFill} /></svg>;
}

const PersonLockFilled = wrapIcon(rawSvg({}), 'PersonLockFilled');
export default PersonLockFilled;
      