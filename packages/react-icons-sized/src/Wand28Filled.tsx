import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.5 3.75a.75.75 0 00-1.5 0V5h-1.25a.75.75 0 000 1.5H21v1.25a.75.75 0 001.5 0V6.5h1.25a.75.75 0 000-1.5H22.5V3.75z" fill={primaryFill} /><path d="M7.75 5.5c.41 0 .75.34.75.75V7.5h1.25a.75.75 0 010 1.5H8.5v1.25a.75.75 0 01-1.5 0V9H5.75a.75.75 0 010-1.5H7V6.25c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M19.75 17c.41 0 .75.34.75.75V19h1.25a.75.75 0 010 1.5H20.5v1.25a.75.75 0 01-1.5 0V20.5h-1.25a.75.75 0 010-1.5H19v-1.25c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M19.63 9.48a2.87 2.87 0 00-4.54-.64l-.84.85 4.06 4.06.84-.84c.91-.9 1.11-2.3.48-3.43z" fill={primaryFill} /><path d="M17.25 14.81l-4.07-4.07L2.81 21.1a2.88 2.88 0 104.07 4.08L17.25 14.8z" fill={primaryFill} /></svg>;
}

const Wand28Filled = wrapIcon(rawSvg({}), 'Wand28Filled');
export default Wand28Filled;
      