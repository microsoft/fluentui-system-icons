import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.25 4C3.01 4 2 5 2 6.25v2.5C2 9.99 3 11 4.25 11h2.5C7.99 11 9 10 9 8.75v-2.5C9 5.01 8 4 6.75 4h-2.5zm7 1a.75.75 0 000 1.5h10a.75.75 0 000-1.5h-10zm0 3a.75.75 0 000 1.5h7a.75.75 0 000-1.5h-7zm-7 5C3.01 13 2 14 2 15.25v2.5C2 18.99 3 20 4.25 20h2.5C7.99 20 9 19 9 17.75v-2.5C9 14.01 8 13 6.75 13h-2.5zm7 1a.75.75 0 000 1.5h10a.75.75 0 000-1.5h-10zm0 3a.75.75 0 000 1.5h7a.75.75 0 000-1.5h-7z" fill={primaryFill} /></svg>;
}

const AppsListDetail24Filled = wrapIcon(rawSvg({}), 'AppsListDetail24Filled');
export default AppsListDetail24Filled;
      