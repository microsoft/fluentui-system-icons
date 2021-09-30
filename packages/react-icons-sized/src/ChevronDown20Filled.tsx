import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.8 7.73c.28.3.27.78-.03 1.06l-5.25 5a.75.75 0 01-1.04 0l-5.25-5a.75.75 0 011.04-1.08L10 12.2l4.73-4.5a.75.75 0 011.06.02z" fill={primaryFill} /></svg>;
}

const ChevronDown20Filled = wrapIcon(rawSvg({}), 'ChevronDown20Filled');
export default ChevronDown20Filled;
      