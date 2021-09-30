import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M42.75 25.5a1.25 1.25 0 100-2.5H5.25a1.25 1.25 0 100 2.5h37.5zM10.5 39.75V27.5H8v12.25C8 42.1 9.9 44 12.25 44h23.5C38.1 44 40 42.1 40 39.75V27.5h-2.5v12.25c0 .97-.78 1.75-1.75 1.75h-23.5c-.97 0-1.75-.78-1.75-1.75zM40 21V8.25C40 5.9 38.1 4 35.75 4h-23.5A4.25 4.25 0 008 8.25V21h2.5V8.25c0-.97.78-1.75 1.75-1.75h23.5c.97 0 1.75.78 1.75 1.75V21H40z" fill={primaryFill} /></svg>;
}

const SplitHorizontal48Regular = wrapIcon(rawSvg({}), 'SplitHorizontal48Regular');
export default SplitHorizontal48Regular;
      