import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={primaryFill} /><path d="M5 10a5 5 0 1110 0 5 5 0 01-10 0zm5-3.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill={primaryFill} /><path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-6.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z" fill={primaryFill} /></svg>;
}

const Target20Filled = wrapIcon(rawSvg({}), 'Target20Filled');
export default Target20Filled;
      