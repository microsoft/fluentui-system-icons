import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 8a.5.5 0 000-1h-13a.5.5 0 000 1h13zM11 1a2 2 0 012 2v3H3V3c0-1.1.9-2 2-2h6zM3 9v3c0 1.1.9 2 2 2h6a2 2 0 002-2V9H3z" fill={primaryFill} /></svg>;
}

const SplitHorizontal16Filled = wrapIcon(rawSvg({}), 'SplitHorizontal16Filled');
export default SplitHorizontal16Filled;
      