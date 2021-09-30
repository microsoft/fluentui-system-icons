import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.24 3c.96 0 1.75.78 1.75 1.75v14.5c0 .97-.79 1.75-1.75 1.75h-2.5c-.97 0-1.75-.78-1.75-1.75V4.75c0-.92.7-1.67 1.6-1.74h2.65zm14.02 0c.97 0 1.75.78 1.75 1.75v6.52a3.29 3.29 0 00-3.62.7l-2.38 2.37V4.75c0-.97.79-1.75 1.75-1.75h2.5zm-1.61 18L22 17.64v1.61c0 .97-.78 1.75-1.75 1.75h-1.61zm-6.16-3.14l2.5-2.5V4.76c0-.97-.79-1.75-1.75-1.75h-2.5c-.97 0-1.75.78-1.75 1.75v14.5c0 .97.78 1.75 1.75 1.75h.43l.35-1.42c.16-.65.5-1.24.97-1.72zm6.61-5.19l-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 10-3.23-3.24z" fill={primaryFill} /></svg>;
}

const ColumnTripleEdit24Filled = wrapIcon(rawSvg({}), 'ColumnTripleEdit24Filled');
export default ColumnTripleEdit24Filled;
      