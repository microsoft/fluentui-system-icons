import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 3c.38 0 .7.28.74.65l.01.1v16.5a.75.75 0 01-1.5.1V3.75c0-.41.34-.75.75-.75zm-13.03.22a.75.75 0 01.98-.07l.08.07 8.25 8.25c.27.27.3.68.07.98l-.07.08-8.25 8.25a.75.75 0 01-1.13-.98l.07-.08L12.94 12 5.22 4.28a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
}

const ArrowNext24Regular = wrapIcon(rawSvg({}), 'ArrowNext24Regular');
export default ArrowNext24Regular;
      