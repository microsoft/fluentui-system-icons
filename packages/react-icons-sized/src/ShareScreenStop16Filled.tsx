import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3a2 2 0 00-2 2v6c0 1.1.9 2 2 2h10a2 2 0 002-2V5a2 2 0 00-2-2H3zm2.15 2.15c.2-.2.5-.2.7 0L8 7.29l2.15-2.14a.5.5 0 01.7.7L8.71 8l2.14 2.15a.5.5 0 01-.7.7L8 8.71l-2.15 2.14a.5.5 0 01-.7-.7L7.29 8 5.15 5.85a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
}

const ShareScreenStop16Filled = wrapIcon(rawSvg({}), 'ShareScreenStop16Filled');
export default ShareScreenStop16Filled;
      