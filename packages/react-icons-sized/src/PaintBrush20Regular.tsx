import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 2a.5.5 0 00-.5.5V11c0 1.1.9 2 2 2h1v3a2 2 0 104 0v-3h1a2 2 0 002-2V2.5a.5.5 0 00-.5-.5h-9zm.5 8h8v1a1 1 0 01-1 1h-1.5a.5.5 0 00-.5.5V16a1 1 0 11-2 0v-3.5a.5.5 0 00-.5-.5H7a1 1 0 01-1-1v-1zm8-1H6V3h4v1.5a.5.5 0 001 0V3h1v2.5a.5.5 0 001 0V3h1v6z" fill={primaryFill} /></svg>;
}

const PaintBrush20Regular = wrapIcon(rawSvg({}), 'PaintBrush20Regular');
export default PaintBrush20Regular;
      