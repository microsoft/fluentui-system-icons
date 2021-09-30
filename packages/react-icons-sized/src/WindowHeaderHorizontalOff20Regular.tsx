import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7L3.4 4.12C3.15 4.52 3 5 3 5.5v9A2.5 2.5 0 005.5 17h9c.5 0 .98-.15 1.38-.41l1.27 1.26a.5.5 0 00.7-.7l-15-15zm12.3 13.7c-.2.1-.42.15-.65.15h-9A1.5 1.5 0 014 14.5V7h2.3l8.85 8.85zM16 7v6.88l.98.97.02-.35v-9A2.5 2.5 0 0014.5 3h-9c-.12 0-.24 0-.35.02L9.12 7H16z" fill={primaryFill} /></svg>;
}

const WindowHeaderHorizontalOff20Regular = wrapIcon(rawSvg({}), 'WindowHeaderHorizontalOff20Regular');
export default WindowHeaderHorizontalOff20Regular;
      