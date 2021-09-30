import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2.75a.75.75 0 011.5 0v22.5a.75.75 0 01-1.5 0V2.75zM8.75 5A2.75 2.75 0 006 7.75v2.5A2.75 2.75 0 008.75 13h13.5A2.75 2.75 0 0025 10.25v-2.5A2.75 2.75 0 0022.25 5H8.75zm0 10A2.75 2.75 0 006 17.75v2.5A2.75 2.75 0 008.75 23h8a2.75 2.75 0 002.75-2.75v-2.5A2.75 2.75 0 0016.75 15h-8z" fill={primaryFill} /></svg>;
}

const AlignLeft28Filled = wrapIcon(rawSvg({}), 'AlignLeft28Filled');
export default AlignLeft28Filled;
      