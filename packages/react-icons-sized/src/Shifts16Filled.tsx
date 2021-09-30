import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14h7a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0011.5 2h-7zm3 2c.28 0 .5.22.5.5V8h2.5a.5.5 0 010 1h-3a.5.5 0 01-.5-.5v-4c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const Shifts16Filled = wrapIcon(rawSvg({}), 'Shifts16Filled');
export default Shifts16Filled;
      