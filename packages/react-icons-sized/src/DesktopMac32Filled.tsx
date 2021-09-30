import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.02 7.6L4 8v12a4 4 0 004 4h4v1a1 1 0 01-1 1h-1a1 1 0 100 2h12a1 1 0 100-2h-1a1 1 0 01-1-1v-1h4a4 4 0 004-4V8a4 4 0 00-4-4H8a4 4 0 00-3.98 3.6zM18 24v1a3 3 0 00.17 1h-4.34a3 3 0 00.17-1v-1h4zm6-2H8a2 2 0 01-2-2h20a2 2 0 01-2 2z" fill={primaryFill} /></svg>;
}

const DesktopMac32Filled = wrapIcon(rawSvg({}), 'DesktopMac32Filled');
export default DesktopMac32Filled;
      