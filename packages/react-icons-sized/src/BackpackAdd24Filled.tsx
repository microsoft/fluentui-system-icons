import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.26 5.42a3.75 3.75 0 017.48 0 8 8 0 014.2 6.05 6.48 6.48 0 00-4.17-.24c.15-.24.23-.52.23-.81A2.42 2.42 0 0013.58 8h-3.16A2.42 2.42 0 008 10.42c0 .87.7 1.58 1.58 1.58h4.45c-.8.51-1.5 1.2-2 2H4v-1.5a8 8 0 014.26-7.08zm1.72-.66a8.01 8.01 0 014.04 0 2.25 2.25 0 00-4.04 0z" fill={primaryFill} /><path d="M11.25 15.71H9.5v1.54a.75.75 0 01-1.5 0v-1.54H4v3.04C4 20.55 5.46 22 7.25 22h5.56a6.48 6.48 0 01-1.56-6.29z" fill={primaryFill} /><path d="M9.5 10.42c0-.51.41-.92.92-.92h3.16c.51 0 .92.41.92.92 0 .04-.04.08-.08.08H9.58a.08.08 0 01-.08-.08z" fill={primaryFill} /><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.5 8.5V18h2.5a.5.5 0 000-1H18v-2.5a.5.5 0 10-1 0V17h-2.5a.5.5 0 000 1H17v2.5a.5.5 0 101 0z" fill={primaryFill} /></svg>;
}

const BackpackAdd24Filled = wrapIcon(rawSvg({}), 'BackpackAdd24Filled');
export default BackpackAdd24Filled;
      