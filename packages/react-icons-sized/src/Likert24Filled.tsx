import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4H5a3 3 0 00-3 3v4.25h4V4z" fill={primaryFill} /><path d="M2 12.75V17a3 3 0 003 3h1v-7.25H2z" fill={primaryFill} /><path d="M7.5 20H19a3 3 0 003-3v-4.25H7.5V20zm3.75-3.75a1 1 0 11-2 0 1 1 0 012 0zm2.75 0a1 1 0 11-2 0 1 1 0 012 0zm3 0a1 1 0 11-2 0 1 1 0 012 0zm3 0a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M22 11.25H7.5V4H19a3 3 0 013 3v4.25zm-11.75-2.5a1 1 0 100-2 1 1 0 000 2zm3.75-1a1 1 0 10-2 0 1 1 0 002 0zm3 0a1 1 0 10-2 0 1 1 0 002 0zm3 0a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /></svg>;
}

const Likert24Filled = wrapIcon(rawSvg({}), 'Likert24Filled');
export default Likert24Filled;
      