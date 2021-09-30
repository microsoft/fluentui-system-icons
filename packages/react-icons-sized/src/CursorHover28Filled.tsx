import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7.75A2.75 2.75 0 014.75 5h18.5A2.75 2.75 0 0126 7.75v11.5A2.75 2.75 0 0123.25 22h-.07c.18-.6.02-1.28-.44-1.74l-9-9a1.75 1.75 0 00-2.99 1.24V22h-6A2.75 2.75 0 012 19.25V7.75z" fill={primaryFill} /><path d="M13.03 11.97a.75.75 0 00-1.28.53v12.75a.75.75 0 001.33.48l3.39-4.07c.05-.07.14-.1.23-.09l4.7.67a.75.75 0 00.63-1.27l-9-9z" fill={primaryFill} /></svg>;
}

const CursorHover28Filled = wrapIcon(rawSvg({}), 'CursorHover28Filled');
export default CursorHover28Filled;
      