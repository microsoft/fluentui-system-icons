import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 6.25C4 4.45 5.46 3 7.25 3h9.5C18.55 3 20 4.46 20 6.25v9c0 1-.46 1.9-1.17 2.5.71.6 1.17 1.5 1.17 2.5V21a.75.75 0 01-1.5 0v-.75c0-.97-.78-1.75-1.75-1.75h-1a.75.75 0 01-.7-1h-1.6c.04.08.05.16.05.25 0 .41-.34.75-.75.75h-1.5a.75.75 0 01-.7-1h-1.6a.75.75 0 01-.7 1h-1c-.97 0-1.75.78-1.75 1.75V21A.75.75 0 014 21v-.75c0-1 .46-1.9 1.17-2.5A3.27 3.27 0 014 15.25v-9zm1.78 9.95c.29.45.78.75 1.33.8l4.37-4.29a.75.75 0 011.05 0L16.92 17a1.75 1.75 0 001.31-.81l-4.66-4.54a2.25 2.25 0 00-3.14 0L5.78 16.2zM15 9a1.25 1.25 0 100-2.5A1.25 1.25 0 0015 9z" fill={primaryFill} /></svg>;
}

const ImageReflection24Filled = wrapIcon(rawSvg({}), 'ImageReflection24Filled');
export default ImageReflection24Filled;
      