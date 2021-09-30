import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5v1.76a5.5 5.5 0 00-1-.66V5H3v6.5c0 .83.67 1.5 1.5 1.5h1.1c.18.36.4.7.66 1H4.5A2.5 2.5 0 012 11.5v-7zM4.5 3c-.65 0-1.2.42-1.41 1h9.83c-.21-.58-.77-1-1.42-1h-7zm6 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm2.35-4.85a.5.5 0 01-.7.7L11 9.71v2.79a.5.5 0 01-1 0V9.7l-1.15 1.15a.5.5 0 01-.7-.7l2-2A.5.5 0 0110.5 8a.5.5 0 01.35.14l2 2z" fill={primaryFill} /></svg>;
}

const WindowArrowUp16Regular = wrapIcon(rawSvg({}), 'WindowArrowUp16Regular');
export default WindowArrowUp16Regular;
      