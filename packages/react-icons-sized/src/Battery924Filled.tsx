import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 9a1 1 0 00-1 1v4a1 1 0 001 1h9a1 1 0 001-1v-4a1 1 0 00-1-1H6zM2 9a3 3 0 013-3h12.5a3 3 0 013 3v1h.5a1 1 0 011 1v2a1 1 0 01-1 1h-.5v1a3 3 0 01-3 3H5a3 3 0 01-3-3V9z" fill={primaryFill} /></svg>;
}

const Battery924Filled = wrapIcon(rawSvg({}), 'Battery924Filled');
export default Battery924Filled;
      