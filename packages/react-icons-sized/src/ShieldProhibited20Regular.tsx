import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.28 2.08a.5.5 0 00-.56 0 15.05 15.05 0 01-6.3 2.43A.5.5 0 003 5v4.5c0 3.9 2.3 6.73 6.82 8.47a.5.5 0 00.36 0l.07-.03c-.55-.4-1.02-.9-1.38-1.48C5.6 14.86 4 12.56 4 9.5V5.43a15.97 15.97 0 005.6-2.08l.4-.25.4.25A15.97 15.97 0 0016 5.43V8.6c.36.18.7.4 1 .66V5a.5.5 0 00-.43-.5 15.05 15.05 0 01-6.3-2.42z" fill={primaryFill} /><path d="M10.7 15.6l4.9-4.9a3.5 3.5 0 00-4.9 4.9zm.7.7a3.5 3.5 0 004.9-4.9l-4.9 4.9zm2.1 1.7a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" fill={primaryFill} /></svg>;
}

const ShieldProhibited20Regular = wrapIcon(rawSvg({}), 'ShieldProhibited20Regular');
export default ShieldProhibited20Regular;
      