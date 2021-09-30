import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 2a3 3 0 00-3 3v3.5a.5.5 0 001 0V5c0-1.1.9-2 2-2h3.5a.5.5 0 000-1H5z" fill={primaryFill} /><path d="M11.5 2a.5.5 0 000 1H15a2 2 0 012 2v3.5a.5.5 0 001 0V5a3 3 0 00-3-3h-3.5z" fill={primaryFill} /><path d="M2.5 11c.28 0 .5.22.5.5V15c0 1.1.9 2 2 2h3.5a.5.5 0 010 1H5a3 3 0 01-3-3v-3.5c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M18 11.5a.5.5 0 00-1 0V15a2 2 0 01-2 2h-3.5a.5.5 0 000 1H15a3 3 0 003-3v-3.5z" fill={primaryFill} /></svg>;
}

const ResizeRegular = wrapIcon(rawSvg({}), 'ResizeRegular');
export default ResizeRegular;
      