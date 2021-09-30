import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 3a3 3 0 00-3 3v3.6c.32-.16.65-.3 1-.4V6c0-1.1.9-2 2-2h8a2 2 0 012 2v8a2 2 0 01-2 2h-3.2c-.1.35-.24.68-.4 1H14a3 3 0 003-3V6a3 3 0 00-3-3H6z" fill={primaryFill} /><path d="M9 10.26c.27.22.52.47.74.74h2.76a.5.5 0 000-1H10V6.5a.5.5 0 00-1 0v3.76z" fill={primaryFill} /><path d="M10 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15-1.85a.5.5 0 00-.7 0L4.5 15.29l-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const ShiftsCheckmark20Regular = wrapIcon(rawSvg({}), 'ShiftsCheckmark20Regular');
export default ShiftsCheckmark20Regular;
      