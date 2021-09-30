import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.3 1.5a.5.5 0 00-1 0v.8c0 .29.07.56.2.8a2.5 2.5 0 00-1.74 1.85A1.1 1.1 0 014 3.9V2.5a.5.5 0 00-1 0v1.4a2.1 2.1 0 001.7 2.06V7H2.5a.5.5 0 000 1h2.2v1.7c0 .1 0 .21.02.32A2 2 0 003 12v1.5a.5.5 0 001 0V12a1 1 0 01.97-1 3.3 3.3 0 006.06 0 1 1 0 01.97 1v1.5a.5.5 0 001 0V12a2 2 0 00-1.72-1.98l.02-.32V8h2.2a.5.5 0 000-1h-2.2V5.96A2.1 2.1 0 0013 3.9V2.5a.5.5 0 00-1 0v1.4c0 .49-.32.9-.76 1.05A2.5 2.5 0 009.5 3.1c.13-.24.2-.51.2-.8v-.8a.5.5 0 00-1 0v.8a.7.7 0 11-1.4 0v-.8z" fill={primaryFill} /></svg>;
}

const Bug16Filled = wrapIcon(rawSvg({}), 'Bug16Filled');
export default Bug16Filled;
      