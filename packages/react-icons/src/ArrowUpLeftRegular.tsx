import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 4a.5.5 0 000-1h-8a.5.5 0 00-.5.5v8a.5.5 0 001 0V4.7l12.15 12.15a.5.5 0 00.7-.7L4.71 4h6.79z" fill={primaryFill} /></svg>;
}

const ArrowUpLeftRegular = wrapIcon(rawSvg({}), 'ArrowUpLeftRegular');
export default ArrowUpLeftRegular;
      