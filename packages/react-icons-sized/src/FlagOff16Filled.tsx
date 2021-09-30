import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.3 10l4.85 4.85a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L3 3.71v9.79a.5.5 0 001 0V10h5.3zm3.7 0h-.88l-8-8H13c.4 0 .64.46.4.8L11.12 6l2.3 3.2a.5.5 0 01-.41.8z" fill={primaryFill} /></svg>;
}

const FlagOff16Filled = wrapIcon(rawSvg({}), 'FlagOff16Filled');
export default FlagOff16Filled;
      