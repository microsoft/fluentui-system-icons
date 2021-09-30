import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a4 4 0 014 4v2h2.5c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 014 20.5v-11C4 8.67 4.67 8 5.5 8H8V6a4 4 0 014-4zm0 11.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 4a2 2 0 00-2 2v2h4V6a2 2 0 00-2-2z" fill={primaryFill} /></svg>;
}

const LockClosed24Filled = wrapIcon(rawSvg({}), 'LockClosed24Filled');
export default LockClosed24Filled;
      