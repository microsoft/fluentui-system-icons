import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.65 8.25C14.4 5.92 12.82 4 10 4 7.18 4 5.59 5.9 5.35 8.25H5.1A3.34 3.34 0 002 11.62 3.33 3.33 0 005.28 15h3.2c.1-.36.28-.7.5-1h-3.7A2.33 2.33 0 013 11.62a2.33 2.33 0 012.28-2.37h.07a1 1 0 001-.9C6.55 6.32 7.89 5 10 5c2.1 0 3.45 1.32 3.65 3.35a1 1 0 00.32.63l.13-.14c.25-.25.54-.45.85-.59H14.65zm.16 1.3l-4.83 4.83a2.2 2.2 0 00-.58 1.02l-.37 1.5a.89.89 0 001.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 00-2.64-2.64z" fill={primaryFill} /></svg>;
}

const CloudEdit20Regular = wrapIcon(rawSvg({}), 'CloudEdit20Regular');
export default CloudEdit20Regular;
      