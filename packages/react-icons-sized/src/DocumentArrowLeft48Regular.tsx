import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 8.25c0-.97.78-1.75 1.75-1.75H24v8.75A3.75 3.75 0 0027.75 19h9.75v20.75c0 .97-.78 1.75-1.75 1.75H24.26c-.52.9-1.16 1.75-1.88 2.5h13.37C38.1 44 40 42.1 40 39.75V18.41c0-.6-.24-1.16-.66-1.59L27.18 4.66c-.43-.42-1-.66-1.6-.66H12.26A4.25 4.25 0 008 8.25V23c.8-.34 1.63-.6 2.5-.76V8.25zm24.98 8.25h-7.73c-.69 0-1.25-.56-1.25-1.25V7.52l8.98 8.98z" fill={primaryFill} /><path d="M24 35a11 11 0 11-22 0 11 11 0 0122 0zm-12.3-5.7a1 1 0 00-1.4 0l-5 5a1 1 0 000 1.4l5 5a1 1 0 001.4-1.4L8.42 36H20a1 1 0 100-2H8.41l3.3-3.3a1 1 0 000-1.4z" fill={primaryFill} /></svg>;
}

const DocumentArrowLeft48Regular = wrapIcon(rawSvg({}), 'DocumentArrowLeft48Regular');
export default DocumentArrowLeft48Regular;
      