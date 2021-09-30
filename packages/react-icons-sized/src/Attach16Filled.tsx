import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.43 8.88l4.6-4.6a2.25 2.25 0 113.18 3.19l-5.3 5.3a.75.75 0 11-1.06-1.06l5.3-5.3A.75.75 0 009.1 5.35l-5.3 5.3a2.25 2.25 0 003.18 3.18l5.3-5.3a3.75 3.75 0 00-5.3-5.3l-4.6 4.6a.75.75 0 001.06 1.05z" fill={primaryFill} /></svg>;
}

const Attach16Filled = wrapIcon(rawSvg({}), 'Attach16Filled');
export default Attach16Filled;
      