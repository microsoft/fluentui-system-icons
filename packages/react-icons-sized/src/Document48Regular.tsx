import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.25 4A4.25 4.25 0 008 8.25v31.5C8 42.1 9.9 44 12.25 44h23.5C38.1 44 40 42.1 40 39.75V18.41c0-.6-.24-1.16-.66-1.59L27.18 4.66c-.43-.42-1-.66-1.6-.66H12.26zM10.5 8.25c0-.97.78-1.75 1.75-1.75H24v8.75A3.75 3.75 0 0027.75 19h9.75v20.75c0 .97-.78 1.75-1.75 1.75h-23.5c-.97 0-1.75-.78-1.75-1.75V8.25zm24.98 8.25h-7.73c-.69 0-1.25-.56-1.25-1.25V7.52l8.98 8.98z" fill={primaryFill} /></svg>;
}

const Document48Regular = wrapIcon(rawSvg({}), 'Document48Regular');
export default Document48Regular;
      