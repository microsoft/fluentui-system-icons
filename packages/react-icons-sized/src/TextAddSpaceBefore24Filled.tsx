import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.3 6.2a1 1 0 011.4-1.4L12 6.08l1.3-1.3a1 1 0 111.4 1.42l-2 2a1 1 0 01-1.4 0l-2-2z" fill={primaryFill} /><path d="M3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z" fill={primaryFill} /><path d="M3 18a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
}

const TextAddSpaceBefore24Filled = wrapIcon(rawSvg({}), 'TextAddSpaceBefore24Filled');
export default TextAddSpaceBefore24Filled;
      