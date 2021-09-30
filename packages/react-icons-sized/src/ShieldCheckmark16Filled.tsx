import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.65 2.15c.2-.2.5-.2.7 0A5.71 5.71 0 0012.5 4c.28 0 .5.22.5.5v1.1a5.5 5.5 0 00-7.5 7.2C3.84 11.6 3 9.81 3 7.5v-3c0-.28.22-.5.5-.5 1.53 0 2.9-.61 4.15-1.85zM15 10.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-2.15-1.85c.2.2.2.5 0 .7l-3 3a.5.5 0 01-.7 0l-1-1a.5.5 0 01.7-.7l.65.64 2.65-2.64c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const ShieldCheckmark16Filled = wrapIcon(rawSvg({}), 'ShieldCheckmark16Filled');
export default ShieldCheckmark16Filled;
      