import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.4 1.35a.5.5 0 00-.76 0 18.24 18.24 0 01-4.3 3.4.5.5 0 00-.24.37L2.15 12h-.66a.5.5 0 000 1H14.5a.5.5 0 000-1h-.6l-.96-6.88a.5.5 0 00-.25-.37 18.24 18.24 0 01-4.28-3.4zM5.95 12A16.5 16.5 0 008 7.66c.6 1.81 1.25 3.1 2.06 4.34H5.94z" fill={primaryFill} /></svg>;
}

const Tent16Filled = wrapIcon(rawSvg({}), 'Tent16Filled');
export default Tent16Filled;
      