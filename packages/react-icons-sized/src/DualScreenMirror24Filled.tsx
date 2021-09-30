import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.25 4C21.22 4 22 4.8 22 5.75v12.5c0 .96-.78 1.75-1.75 1.75H13c-.08 0-.17 0-.25-.02V4.02L13 4h7.25zm-2.08 5.41a.75.75 0 00-1.34 0l-2.25 4.5a.75.75 0 00.67 1.09h4.5a.75.75 0 00.67-1.09l-2.25-4.5z" fill={primaryFill} /><path d="M11 4c.09 0 .17 0 .25.02v15.96L11 20H3.76C2.79 20 2 19.2 2 18.25V5.75C2 4.78 2.79 4 3.76 4H11zM7.17 9.41a.75.75 0 00-1.34 0l-2.25 4.5A.75.75 0 004.25 15h4.5a.75.75 0 00.67-1.09l-2.25-4.5z" fill={primaryFill} /></svg>;
}

const DualScreenMirror24Filled = wrapIcon(rawSvg({}), 'DualScreenMirror24Filled');
export default DualScreenMirror24Filled;
      