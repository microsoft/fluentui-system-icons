import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 2a.75.75 0 000 1.5h1.5v21h-1.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-1.5v-21h1.5a.75.75 0 000-1.5h-4.5z" fill={primaryFill} /><path d="M6.25 6.02h6v16h-6A3.25 3.25 0 013 18.77v-9.5c0-1.8 1.46-3.25 3.25-3.25z" fill={primaryFill} /><path d="M21.75 22.02h-6v-16h6c1.8 0 3.25 1.45 3.25 3.25v9.5c0 1.8-1.46 3.25-3.25 3.25z" fill={primaryFill} /></svg>;
}

const Rename28Filled = wrapIcon(rawSvg({}), 'Rename28Filled');
export default Rename28Filled;
      