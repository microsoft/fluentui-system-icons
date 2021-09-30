import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4c0-1.1.9-2 2-2h8a2 2 0 012 2v2h-2.07l-.59-1.17a1.5 1.5 0 00-2.68 0l-.5 1.01-.77-1.9a1.5 1.5 0 00-2.73-.11L3.57 6H2V4zm9 5h3v1a2 2 0 01-2 2h-2v1h1.5a.5.5 0 110 1h-7a.5.5 0 010-1H6v-1H4a2 2 0 01-2-2V9h2.5a1.5 1.5 0 001.34-.83v-.01l.77 1.9a1.5 1.5 0 002.73.11l.74-1.48c.26.2.58.31.92.31zm-2 4v-1H7v1h2zM6.46 4.32a.5.5 0 00-.9-.03L4.18 7H2.5a.5.5 0 000 1H4.5a.5.5 0 00.45-.28l1-2 1.59 3.97a.5.5 0 00.9.03L10 6.62l.55 1.1A.5.5 0 0011 8h2.5a.5.5 0 000-1h-2.2l-.85-1.72a.5.5 0 00-.9 0l-1.5 3-1.59-3.97z" fill={primaryFill} /></svg>;
}

const DesktopPulse16Filled = wrapIcon(rawSvg({}), 'DesktopPulse16Filled');
export default DesktopPulse16Filled;
      