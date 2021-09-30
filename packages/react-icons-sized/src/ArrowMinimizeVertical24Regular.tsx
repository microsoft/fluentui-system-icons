import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 2c.41 0 .75.34.75.75v4.19l1.22-1.22a.75.75 0 111.06 1.06l-2.5 2.5c-.3.3-.77.3-1.06 0l-2.5-2.5a.75.75 0 011.06-1.06L11 6.94V2.75c0-.41.34-.75.75-.75zM4 11.75c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H4.75a.75.75 0 01-.75-.75zm9.72 6.03a.75.75 0 101.06-1.06l-2.5-2.5a.75.75 0 00-1.06 0l-2.5 2.5a.75.75 0 101.06 1.06L11 16.56v4.69a.75.75 0 001.5 0v-4.69l1.22 1.22z" fill={primaryFill} /></svg>;
}

const ArrowMinimizeVertical24Regular = wrapIcon(rawSvg({}), 'ArrowMinimizeVertical24Regular');
export default ArrowMinimizeVertical24Regular;
      