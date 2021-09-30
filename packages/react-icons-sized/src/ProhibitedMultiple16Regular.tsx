import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 12A5 5 0 107 2a5 5 0 000 10zm0-1c-.92 0-1.78-.31-2.45-.84l5.61-5.61A4 4 0 017 11zm2.45-7.16L3.84 9.45a4 4 0 015.61-5.61zM13 7c0 .38-.03.75-.1 1.1a4.01 4.01 0 01-4.8 4.8 6.03 6.03 0 01-2.24 0 5 5 0 007.03-7.03c.07.36.11.74.11 1.13z" fill={primaryFill} /></svg>;
}

const ProhibitedMultiple16Regular = wrapIcon(rawSvg({}), 'ProhibitedMultiple16Regular');
export default ProhibitedMultiple16Regular;
      