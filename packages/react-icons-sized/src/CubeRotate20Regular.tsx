import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.95 3.53a2.5 2.5 0 012.1 0L15.7 5.7a.5.5 0 01.29.45V8h1V6.14a1.5 1.5 0 00-.87-1.36l-4.66-2.15a3.5 3.5 0 00-2.94 0L3.87 4.78A1.5 1.5 0 003 6.14V8h1V6.14c0-.2.11-.37.29-.45l4.66-2.16z" fill={primaryFill} /><path d="M3.4 11a6.44 6.44 0 00.76.54A11.4 11.4 0 0010 13a11.4 11.4 0 006-1.56 6.44 6.44 0 001-.8c.2-.21.38-.43.52-.64H16a.5.5 0 010-1h2.5a.5.5 0 01.5.5V12a.5.5 0 11-1 0v-.98a6.2 6.2 0 01-1.64 1.37l-.36.2c-1.6.88-3.7 1.41-6 1.41a12.67 12.67 0 01-6.36-1.61A6.2 6.2 0 012 11.02V12a.5.5 0 11-1 0V9.5a.5.5 0 01.5-.5H4a.5.5 0 010 1H2.48a4.12 4.12 0 00.92 1z" fill={primaryFill} /><path d="M4 13.72v.14c0 .2.11.37.29.45l4.66 2.16c.67.3 1.43.3 2.1 0l4.66-2.16a.5.5 0 00.29-.45v-.14c.35-.17.69-.35 1-.55v.69a1.5 1.5 0 01-.87 1.36l-4.66 2.15c-.93.43-2 .43-2.94 0l-4.66-2.15A1.5 1.5 0 013 13.86v-.69c.31.2.65.38 1 .55z" fill={primaryFill} /><path d="M6.04 6.8a.5.5 0 01.66-.26L10 7.96l3.3-1.42a.5.5 0 01.4.92l-3.2 1.37V11a.5.5 0 11-1 0V8.83L6.3 7.46a.5.5 0 01-.26-.66z" fill={primaryFill} /></svg>;
}

const CubeRotate20Regular = wrapIcon(rawSvg({}), 'CubeRotate20Regular');
export default CubeRotate20Regular;
      