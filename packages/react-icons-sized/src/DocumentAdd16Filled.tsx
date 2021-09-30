import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 1v3.5c0 .83.67 1.5 1.5 1.5H14v7.5c0 .83-.67 1.5-1.5 1.5H8.66A5.5 5.5 0 004 5.2V2.5C4 1.67 4.67 1 5.5 1H9z" fill={primaryFill} /><path d="M10 1.25V4.5c0 .28.22.5.5.5h3.25L10 1.25z" fill={primaryFill} /><path d="M10 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V10H3.5a.5.5 0 000 1H5v1.5a.5.5 0 001 0V11h1.5a.5.5 0 000-1H6V8.5z" fill={primaryFill} /></svg>;
}

const DocumentAdd16Filled = wrapIcon(rawSvg({}), 'DocumentAdd16Filled');
export default DocumentAdd16Filled;
      