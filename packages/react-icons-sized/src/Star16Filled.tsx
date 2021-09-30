import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.2 2.1a.9.9 0 011.6 0l1.53 3.08 3.4.5a.9.9 0 01.5 1.53l-2.46 2.4.58 3.39a.9.9 0 01-1.3.95L8 12.35l-3.04 1.6a.9.9 0 01-1.3-.95l.57-3.39-2.46-2.4a.9.9 0 01.5-1.53l3.4-.5L7.2 2.1z" fill={primaryFill} /></svg>;
}

const Star16Filled = wrapIcon(rawSvg({}), 'Star16Filled');
export default Star16Filled;
      