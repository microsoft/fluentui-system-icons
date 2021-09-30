import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.66 10.48a3.5 3.5 0 113.67-5.96 3.5 3.5 0 01-3.67 5.96zM23 19.53a2.25 2.25 0 003-2.13v-2.67a2.75 2.75 0 00-2.75-2.75h-5.82a4.2 4.2 0 01.07.77v4c0 1.44-.81 2.69-2 3.32v3.7a2.25 2.25 0 003.75 1.67A2.25 2.25 0 0023 23.76v-4.23zm-7-2.62v-4.16a2.96 2.96 0 00-.1-.77A2.75 2.75 0 0013.24 10h-8.5A2.75 2.75 0 002 12.75v4a2.25 2.25 0 003 2.12v4.75a2.37 2.37 0 004 1.74 2.37 2.37 0 004-1.73v-4.76a2.25 2.25 0 003-1.96zM7.05 8.5a3.98 3.98 0 003.88 0 4 4 0 10-3.88 0z" fill={primaryFill} /></svg>;
}

const Guardian28Filled = wrapIcon(rawSvg({}), 'Guardian28Filled');
export default Guardian28Filled;
      