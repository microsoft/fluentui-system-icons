import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 22a10 10 0 110-20 10 10 0 010 20zm3.27-11.25H14a.75.75 0 000 1.5h2.75c.41 0 .75-.34.75-.75V8.25a.75.75 0 00-1.5 0V9a5 5 0 00-7.83-.23.75.75 0 001.16.96 3.5 3.5 0 015.94 1.02zm-7.27 5V15a5 5 0 007.82.24.75.75 0 10-1.14-.97 3.51 3.51 0 01-5.84-.77H10a.75.75 0 000-1.5H7.25a.75.75 0 00-.75.75v3a.75.75 0 001.5 0z" fill={primaryFill} /></svg>;
}

const ArrowSyncCircle24Filled = wrapIcon(rawSvg({}), 'ArrowSyncCircle24Filled');
export default ArrowSyncCircle24Filled;
      