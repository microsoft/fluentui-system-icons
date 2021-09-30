import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 5.75c0-.69-.56-1.25-1.25-1.25h-.75a.75.75 0 010-1.5H4a2.75 2.75 0 012.75 2.75v12.5A2.75 2.75 0 014 21h-.75a.75.75 0 010-1.5H4c.69 0 1.25-.56 1.25-1.25V5.75zM10.75 3A2.75 2.75 0 008 5.75v12.5A2.75 2.75 0 0010.75 21h.42l.35-1.42c.16-.65.5-1.24.97-1.72l3.51-3.5V5.75A2.75 2.75 0 0013.25 3h-2.5zM19 5.75v5.73c-.22.14-.42.3-.6.48l-.9.9V5.75A2.75 2.75 0 0120.25 3H21a.75.75 0 010 1.5h-.75c-.69 0-1.25.56-1.25 1.25zm.1 6.92l-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 00-3.23-3.24z" fill={primaryFill} /></svg>;
}

const ColumnEdit24Filled = wrapIcon(rawSvg({}), 'ColumnEdit24Filled');
export default ColumnEdit24Filled;
      