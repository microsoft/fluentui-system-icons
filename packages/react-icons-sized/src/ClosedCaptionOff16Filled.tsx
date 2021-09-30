import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.3 13l1.85 1.85a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L2.5 3.21A2.5 2.5 0 001 5.5v5A2.5 2.5 0 003.5 13h8.8zM5.81 6.53a.79.79 0 00-.2.07C5.34 6.74 5 7.14 5 8c0 .86.34 1.26.62 1.4.3.15.68.1.93-.15a.5.5 0 11.7.7 1.8 1.8 0 01-2.07.35C4.46 9.94 4 9.14 4 8c0-1.07.41-1.85 1.06-2.23l.76.76zm3.8.07a1 1 0 00-.43.46l5.14 5.15A2.5 2.5 0 0015 10.5v-5A2.5 2.5 0 0012.5 3H5.12l3.34 3.34a1.8 1.8 0 012.8-.29.5.5 0 01-.71.7.8.8 0 00-.93-.15z" fill={primaryFill} /></svg>;
}

const ClosedCaptionOff16Filled = wrapIcon(rawSvg({}), 'ClosedCaptionOff16Filled');
export default ClosedCaptionOff16Filled;
      