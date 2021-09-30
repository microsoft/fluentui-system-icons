import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 16.5v-13C4 2.67 4.67 2 5.5 2H10z" fill={primaryFill} /><path d="M11 2.25V6.5c0 .28.22.5.5.5h4.25L11 2.25z" fill={primaryFill} /></svg>;
}

const Document20Filled = wrapIcon(rawSvg({}), 'Document20Filled');
export default Document20Filled;
      