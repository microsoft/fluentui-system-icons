import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 3.75c0 .41-.34.75-.75.75h-2.5a.75.75 0 010-1.5h2.5c.41 0 .75.34.75.75z" fill={primaryFill} /><path d="M4.5 10.75a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z" fill={primaryFill} /><path d="M19.5 10.75a.75.75 0 011.5 0v2.5a.75.75 0 01-1.5 0v-2.5z" fill={primaryFill} /><path d="M13.25 21a.75.75 0 000-1.5h-2.5a.75.75 0 000 1.5h2.5z" fill={primaryFill} /><path d="M7 3.75A.75.75 0 006.25 3h-.5A2.75 2.75 0 003 5.75v.5a.75.75 0 001.5 0v-.5c0-.69.56-1.25 1.25-1.25h.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M17.75 3a.75.75 0 000 1.5h.5c.69 0 1.25.56 1.25 1.25v.5a.75.75 0 001.5 0v-.5A2.75 2.75 0 0018.25 3h-.5z" fill={primaryFill} /><path d="M7 20.25c0 .41-.34.75-.75.75h-.5A2.75 2.75 0 013 18.25v-.5a.75.75 0 011.5 0v.5c0 .69.56 1.25 1.25 1.25h.5c.41 0 .75.34.75.75z" fill={primaryFill} /><path d="M17.75 21a.75.75 0 010-1.5h.5c.69 0 1.25-.56 1.25-1.25v-.5a.75.75 0 011.5 0v.5A2.75 2.75 0 0118.25 21h-.5z" fill={primaryFill} /></svg>;
}

const Border24Regular = wrapIcon(rawSvg({}), 'Border24Regular');
export default Border24Regular;
      