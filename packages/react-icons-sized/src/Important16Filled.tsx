import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.96 4.46a2.07 2.07 0 114.08 0l-.86 4.56a1.2 1.2 0 01-2.36 0l-.86-4.56z" fill={primaryFill} /><path d="M9.5 12.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /></svg>;
}

const Important16Filled = wrapIcon(rawSvg({}), 'Important16Filled');
export default Important16Filled;
      