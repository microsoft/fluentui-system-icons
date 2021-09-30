import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 9.25a3.5 3.5 0 00-3.5 3.5v18.5a3.5 3.5 0 003.5 3.5H18v-13.5a3.25 3.25 0 015.55-2.3l15.5 15.5c.1.1.18.2.26.3a3.5 3.5 0 003.44-3.5v-18.5a3.5 3.5 0 00-3.5-3.5H8.75z" fill={primaryFill} /><path d="M22.13 20.37a1.25 1.25 0 00-2.13.88v21.5a1.25 1.25 0 002.29.7l4.96-7.33c.17-.27.5-.39.8-.3l8.39 2.14a1.25 1.25 0 001.2-2.1l-15.5-15.5z" fill={primaryFill} /></svg>;
}

const CursorHover48Filled = wrapIcon(rawSvg({}), 'CursorHover48Filled');
export default CursorHover48Filled;
      