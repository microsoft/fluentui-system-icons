import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 7v2h-2V7h2z" fill={primaryFill} /><path d="M7.5 12v-2h-2v2h2z" fill={primaryFill} /><path d="M10.5 7v2h-2V7h2z" fill={primaryFill} /><path d="M10.5 12v-2h-2v2h2z" fill={primaryFill} /><path d="M5 5V3.5C5 2.67 5.67 2 6.5 2h3c.83 0 1.5.67 1.5 1.5V5h2.5c.28 0 .5.22.5.5V12a2 2 0 01-2 2H4a2 2 0 01-2-2V5.5a.5.5 0 01.5-.5H5zm1-1.5V5h4V3.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5zM3 12a1 1 0 001 1h8a1 1 0 001-1V6H3v6z" fill={primaryFill} /></svg>;
}

const StoreMicrosoft16Regular = wrapIcon(rawSvg({}), 'StoreMicrosoft16Regular');
export default StoreMicrosoft16Regular;
      