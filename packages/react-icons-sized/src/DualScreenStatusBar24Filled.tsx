import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.25 4C21.2 4 22 4.8 22 5.75v12.5c0 .96-.79 1.75-1.75 1.75H13c-.09 0-.17 0-.26-.02V4.02L13 4h7.25zM11 4c.08 0 .16 0 .24.02v15.96L11 20H3.75C2.78 20 2 19.2 2 18.25V5.75C2 4.78 2.78 4 3.75 4H11zm8.75 2.5h-4.5a.75.75 0 00-.1 1.5h4.6a.75.75 0 00.1-1.5h-.1z" fill={primaryFill} /></svg>;
}

const DualScreenStatusBar24Filled = wrapIcon(rawSvg({}), 'DualScreenStatusBar24Filled');
export default DualScreenStatusBar24Filled;
      