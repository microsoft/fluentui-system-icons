import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.99 11.95a2 2 0 01-2.05 1.99l-4.74-.14-3.45 7.14c-.28.57-.86.94-1.5.94a.93.93 0 01-.92-1.04l.86-7.19-3.76-.1-.5 1.33c-.18.51-.66.85-1.2.85a.9.9 0 01-.9-.9v-1.48L3 13.18a1.26 1.26 0 010-2.47l.82-.17V9.07a.9.9 0 01.78-.9h.12c.54 0 1.02.33 1.2.84l.5 1.34 3.75-.1-.85-7.1v-.1c0-.51.4-.93.92-.93.58 0 1.12.3 1.42.8l.08.14 3.4 7.04 4.79-.14a2 2 0 012.05 1.93v.06z" fill={primaryFill} /></svg>;
}

const Airplane24Filled = wrapIcon(rawSvg({}), 'Airplane24Filled');
export default Airplane24Filled;
      