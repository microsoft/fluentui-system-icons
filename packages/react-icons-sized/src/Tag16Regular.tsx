import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.27 5.66c.3.3.79.3 1.09 0 .3-.3.3-.78 0-1.08a.77.77 0 00-1.1 0c-.3.3-.3.78 0 1.08z" fill={primaryFill} /><path d="M2.54 7.33a2 2 0 000 2.83l3.3 3.29c.8.78 2.07.78 2.85 0l4.7-4.66a2 2 0 00.58-1.4L14 4.02A2 2 0 0011.97 2l-3.26.01c-.53 0-1.04.22-1.41.59L2.54 7.33zm.7 2.12a1 1 0 010-1.41L8.02 3.3c.18-.19.44-.3.7-.3L11.98 3a1 1 0 011.01 1l-.02 3.38a1 1 0 01-.3.7l-4.69 4.66c-.4.4-1.03.4-1.42 0L3.25 9.45z" fill={primaryFill} /></svg>;
}

const Tag16Regular = wrapIcon(rawSvg({}), 'Tag16Regular');
export default Tag16Regular;
      