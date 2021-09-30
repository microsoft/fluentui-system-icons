import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 13.25c0 .41-.34.75-.75.75h-5.5a.75.75 0 01-.75-.75v-5.5a.75.75 0 011.5 0v3.69l9.22-9.22a.75.75 0 111.06 1.06L4.56 12.5h3.69c.41 0 .75.34.75.75z" fill={primaryFill} /></svg>;
}

const ArrowDownLeft16Filled = wrapIcon(rawSvg({}), 'ArrowDownLeft16Filled');
export default ArrowDownLeft16Filled;
      