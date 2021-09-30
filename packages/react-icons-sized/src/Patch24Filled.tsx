import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.8 3.24l1.5 1.5-6.57 6.55-1.5-1.5a3.25 3.25 0 010-4.59L5.2 3.24a3.25 3.25 0 014.6 0zm4.4 17.52l-1.5-1.5 6.57-6.55 1.5 1.5a3.25 3.25 0 010 4.59l-1.97 1.96a3.25 3.25 0 01-4.6 0zM3.24 14.2a3.25 3.25 0 000 4.6l1.96 1.96a3.25 3.25 0 004.6 0L20.76 9.8a3.25 3.25 0 000-4.6L18.8 3.24a3.25 3.25 0 00-4.6 0L3.24 14.2zM12.75 9a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm3 0a.75.75 0 110-1.5.75.75 0 010 1.5zm3.75-.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 110-1.5.75.75 0 010 1.5z" fill={primaryFill} /></svg>;
}

const Patch24Filled = wrapIcon(rawSvg({}), 'Patch24Filled');
export default Patch24Filled;
      