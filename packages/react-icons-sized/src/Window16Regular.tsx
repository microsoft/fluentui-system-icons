import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5v-7zM3.09 4h9.82c-.2-.58-.76-1-1.41-1h-7c-.65 0-1.2.42-1.41 1zM13 5H3v6.5c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5V5z" fill={primaryFill} /></svg>;
}

const Window16Regular = wrapIcon(rawSvg({}), 'Window16Regular');
export default Window16Regular;
      