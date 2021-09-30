import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 5.75a.75.75 0 00-1.5 0v12.5a.75.75 0 001.5 0V12.5H11v5.75a.75.75 0 001.5 0V5.75a.75.75 0 00-1.5 0V11H4.5V5.75zm10.92 2.09c.23-.46.91-1.34 2.58-1.34.84 0 1.46.26 1.86.64.4.37.64.92.64 1.61 0 1.96-1.3 3.07-2.96 4.34l-.2.17C15.81 14.4 14 15.8 14 18.25a.75.75 0 00.75.75h6.5a.75.75 0 000-1.5h-5.66c.32-1.25 1.43-2.11 2.87-3.22C20.05 13.06 22 11.54 22 8.75c0-1.06-.38-2.01-1.11-2.7A4.12 4.12 0 0018 5c-2.33 0-3.48 1.3-3.92 2.16a.75.75 0 001.34.68z" fill={primaryFill} /></svg>;
}

const TextHeader224Regular = wrapIcon(rawSvg({}), 'TextHeader224Regular');
export default TextHeader224Regular;
      