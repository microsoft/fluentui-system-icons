import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.75 3C9.78 3 9 3.78 9 4.75V9H4.75C3.78 9 3 9.78 3 10.75v6.5c0 .97.78 1.75 1.75 1.75H9v4.25c0 .97.78 1.75 1.75 1.75h6.5c.97 0 1.75-.78 1.75-1.75V19h4.25c.97 0 1.75-.78 1.75-1.75v-6.5C25 9.78 24.22 9 23.25 9H19V4.75C19 3.78 18.22 3 17.25 3h-6.5z" fill={primaryFill} /></svg>;
}

const Doctor28Filled = wrapIcon(rawSvg({}), 'Doctor28Filled');
export default Doctor28Filled;
      