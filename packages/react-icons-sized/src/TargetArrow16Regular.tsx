import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.7 1.04c.18.08.3.26.3.46V4h2.5a.5.5 0 01.35.85l-2 2a.5.5 0 01-.35.15H9.7l-.73.74A1 1 0 117 8v-.05a1 1 0 011.26-.92L9 6.3V3.5a.5.5 0 01.15-.35l2-2a.5.5 0 01.54-.11zM12.3 6l1-1h-1.8a.5.5 0 01-.5-.5V2.7l-1 1V6h2.3zm1.65 1.18a6 6 0 11-5.12-5.12l-.39.38a1.5 1.5 0 00-.35.56H8a5 5 0 105 4.91c.2-.07.4-.19.56-.35l.39-.38zM8 4.5A3.5 3.5 0 1011.5 8h-1A2.5 2.5 0 118 5.5v-1z" fill={primaryFill} /></svg>;
}

const TargetArrow16Regular = wrapIcon(rawSvg({}), 'TargetArrow16Regular');
export default TargetArrow16Regular;
      