import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 5.75C22 4.8 21.22 4 20.25 4H13l-.25.02v7.23h4.83l-.9-1a.75.75 0 111.13-1l2 2.25c.25.29.25.71 0 1l-2 2.25a.75.75 0 11-1.12-1l.89-1h-4.83v7.23L13 20h7.25c.97 0 1.75-.79 1.75-1.75V5.75z" fill={primaryFill} /><path d="M11.25 11.25H6.42l.89-1a.75.75 0 10-1.12-1l-2 2.25a.75.75 0 000 1l2 2.25a.75.75 0 101.12-1l-.89-1h4.83v7.23L11 20H3.76C2.79 20 2 19.2 2 18.25V5.75C2 4.78 2.79 4 3.76 4H11c.09 0 .17 0 .25.02v7.23z" fill={primaryFill} /></svg>;
}

const DualScreenSpan24Filled = wrapIcon(rawSvg({}), 'DualScreenSpan24Filled');
export default DualScreenSpan24Filled;
      