import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.65 8.25C14.4 5.92 12.82 4 10 4 7.18 4 5.59 5.9 5.35 8.25h-.07A3.33 3.33 0 002 11.62 3.33 3.33 0 005.28 15h3.2c.15-.5.42-.96.8-1.33l4.82-4.83c.25-.25.54-.45.85-.59H14.65zm.16 1.3l-4.83 4.83a2.2 2.2 0 00-.58 1.02l-.37 1.5a.89.89 0 001.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 00-2.64-2.64z" fill={primaryFill} /></svg>;
}

const CloudEdit20Filled = wrapIcon(rawSvg({}), 'CloudEdit20Filled');
export default CloudEdit20Filled;
      