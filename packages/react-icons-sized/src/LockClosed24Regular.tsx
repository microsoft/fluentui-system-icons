import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a4 4 0 014 4v2h1.75C18.99 8 20 9 20 10.25v9.5c0 1.24-1 2.25-2.25 2.25H6.25C5.01 22 4 21 4 19.75v-9.5C4 9.01 5 8 6.25 8H8V6a4 4 0 014-4zm5.75 7.5H6.25a.75.75 0 00-.75.75v9.5c0 .41.34.75.75.75h11.5c.41 0 .75-.34.75-.75v-9.5a.75.75 0 00-.75-.75zm-5.75 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-10A2.5 2.5 0 009.5 6v2h5V6A2.5 2.5 0 0012 3.5z" fill={primaryFill} /></svg>;
}

const LockClosed24Regular = wrapIcon(rawSvg({}), 'LockClosed24Regular');
export default LockClosed24Regular;
      