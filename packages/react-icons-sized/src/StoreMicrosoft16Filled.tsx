import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 3.5V5H2.5a.5.5 0 00-.5.5V12c0 1.1.9 2 2 2h8a2 2 0 002-2V5.5a.5.5 0 00-.5-.5H11V3.5c0-.83-.67-1.5-1.5-1.5h-3C5.67 2 5 2.67 5 3.5zM6.5 3h3c.28 0 .5.22.5.5V5H6V3.5c0-.28.22-.5.5-.5zm-1 6V7h2v2h-2zm0 3v-2h2v2h-2zm5-3h-2V7h2v2zm-2 3v-2h2v2h-2z" fill={primaryFill} /></svg>;
}

const StoreMicrosoft16Filled = wrapIcon(rawSvg({}), 'StoreMicrosoft16Filled');
export default StoreMicrosoft16Filled;
      