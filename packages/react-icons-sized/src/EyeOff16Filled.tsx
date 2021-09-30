import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.12 10.83l4.03 4.02a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7l3.23 3.23a6.7 6.7 0 00-2.3 3.08l-.05.15-.01.06s-.08.5.35.61a.5.5 0 00.61-.35L3 8.6a3.02 3.02 0 01.2-.52c.16-.34.4-.8.78-1.26.3-.36.66-.72 1.13-1.02l1.57 1.58a2.5 2.5 0 103.45 3.45zM6.32 4.2l.85.85C7.43 5.02 7.71 5 8 5c2.04 0 3.29.91 4.03 1.82A5.7 5.7 0 0113 8.6v.02a.5.5 0 00.97-.25v-.02a2.3 2.3 0 00-.06-.18 6.7 6.7 0 00-1.12-1.98A5.95 5.95 0 008 4a6.9 6.9 0 00-1.68.2z" fill={primaryFill} /></svg>;
}

const EyeOff16Filled = wrapIcon(rawSvg({}), 'EyeOff16Filled');
export default EyeOff16Filled;
      