import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.25 4C21.2 4 22 4.8 22 5.75v12.5c0 .96-.79 1.75-1.75 1.75H13c-.09 0-.17 0-.26-.02V4.02L13 4h7.25zM11 4c.08 0 .16 0 .24.02v15.96L11 20H3.75C2.78 20 2 19.2 2 18.25V5.75C2 4.78 2.78 4 3.75 4H11zm4.7 9.4a.75.75 0 00-1.06 1.04l.07.09 2.26 2.3.08.07c.27.2.64.2.9 0l.09-.08 2.25-2.3.07-.08a.75.75 0 00-1.06-1.04l-.08.07-1.72 1.75-1.71-1.75-.09-.07zm2.34-6.18a.75.75 0 00-.99-.07l-.08.07-2.26 2.3a.75.75 0 001 1.12l.08-.07 1.71-1.75 1.72 1.75a.75.75 0 001.14-.96l-.07-.09-2.25-2.3z" fill={primaryFill} /></svg>;
}

const DualScreenVerticalScroll24Filled = wrapIcon(rawSvg({}), 'DualScreenVerticalScroll24Filled');
export default DualScreenVerticalScroll24Filled;
      