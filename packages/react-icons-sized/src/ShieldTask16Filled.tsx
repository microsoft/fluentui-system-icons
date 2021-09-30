import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.35 2.15a.5.5 0 00-.7 0A5.72 5.72 0 013.5 4a.5.5 0 00-.5.5v3c0 3.22 1.64 5.4 4.84 6.47.1.04.22.04.32 0C11.36 12.91 13 10.72 13 7.5v-3a.5.5 0 00-.5-.5c-1.53 0-2.9-.61-4.15-1.85zm2.5 4c.2.2.2.5 0 .7l-3 3a.5.5 0 01-.7 0l-1.5-1.5a.5.5 0 01.7-.7L7.5 8.79l2.65-2.64c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const ShieldTask16Filled = wrapIcon(rawSvg({}), 'ShieldTask16Filled');
export default ShieldTask16Filled;
      