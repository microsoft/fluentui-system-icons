import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l4.5 4.5a1.25 1.25 0 101.5 1.5l3.5 3.5a1.25 1.25 0 101.5 1.5l7.5 7.5a.75.75 0 001.06-1.06L3.28 2.22z" fill={primaryFill} /><path d="M18.25 14c0 .3-.1.57-.28.79l-1.76-1.76a1.25 1.25 0 012.04.97z" fill={primaryFill} /><path d="M13.25 9c0 .3-.1.57-.28.79l-1.76-1.76a1.25 1.25 0 012.04.97z" fill={primaryFill} /><path d="M8.25 4c0 .3-.1.58-.28.79L6.21 3.03c.22-.17.5-.28.8-.28.68 0 1.24.56 1.24 1.25z" fill={primaryFill} /><path d="M12 17.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /><path d="M7 12.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /><path d="M17 7.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /><path d="M12 2.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /><path d="M17 2.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /></svg>;
}

const DialpadOff24Regular = wrapIcon(rawSvg({}), 'DialpadOff24Regular');
export default DialpadOff24Regular;
      