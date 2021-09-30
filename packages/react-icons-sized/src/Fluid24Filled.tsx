import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 5h5.75C17.98 5 19 6 19 7.25V11h-1.5V7.25a.75.75 0 00-.75-.75H11V5zm-4.5 6v5.75c0 .4.34.75.75.75H11V19H7.25C6.01 19 5 17.98 5 16.75V11h1.5z" fill={primaryFill} /><path d="M2 4.25C2 3.01 3 2 4.25 2h3.5C8.99 2 10 3 10 4.25v3.5C10 8.99 9 10 7.75 10h-3.5C3.01 10 2 9 2 7.75v-3.5z" fill={primaryFill} /><path d="M12 14.25c0-1.24 1-2.25 2.25-2.25h5.5c1.24 0 2.25 1 2.25 2.25v5.5c0 1.24-1 2.25-2.25 2.25h-5.5C13.01 22 12 21 12 19.75v-5.5z" fill={primaryFill} /></svg>;
}

const Fluid24Filled = wrapIcon(rawSvg({}), 'Fluid24Filled');
export default Fluid24Filled;
      