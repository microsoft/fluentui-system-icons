import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM9.25 4c.7 0 1.3.41 1.59 1.01.77.05 1.5.25 2.16.59V2.5c0-.83-.67-1.5-1.5-1.5h-9C1.67 1 1 1.67 1 2.5V9c0 .83.67 1.5 1.5 1.5H5c0-1.93 1-3.63 2.5-4.61A1.78 1.78 0 017.68 5H6.33a1.75 1.75 0 11-1.58-1h4.5zm-.62 1.33c.3-.11.62-.2.95-.25a.75.75 0 00-.95.25zM15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2 0a.5.5 0 00-.5-.5h-4a.5.5 0 000 1h4a.5.5 0 00.5-.5z" fill={primaryFill} /></svg>;
}

const VoicemailSubtract16Filled = wrapIcon(rawSvg({}), 'VoicemailSubtract16Filled');
export default VoicemailSubtract16Filled;
      