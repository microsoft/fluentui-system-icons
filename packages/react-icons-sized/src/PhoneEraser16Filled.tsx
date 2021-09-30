import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.94 1.35a1.5 1.5 0 012.12 0l1.59 1.59a1.5 1.5 0 010 2.12l-4.59 4.59a1.5 1.5 0 01-2.12 0L6.35 8.06a1.5 1.5 0 010-2.12l4.59-4.59zM10.29 8L8 5.7l-.94.95a.5.5 0 000 .7l1.59 1.59c.2.2.5.2.7 0L10.3 8z" fill={primaryFill} /><path d="M5.73 8.77a2.5 2.5 0 010-3.54l4.13-4.12c-.2-.07-.4-.11-.61-.11h-4.5C3.78 1 3 1.78 3 2.75v10.5c0 .97.78 1.75 1.75 1.75h4.5c.97 0 1.75-.78 1.75-1.75v-3.04l-.15.14a2.5 2.5 0 01-3.53 0L5.73 8.77zM6 12h2a.5.5 0 010 1H6a.5.5 0 010-1z" fill={primaryFill} /></svg>;
}

const PhoneEraser16Filled = wrapIcon(rawSvg({}), 'PhoneEraser16Filled');
export default PhoneEraser16Filled;
      