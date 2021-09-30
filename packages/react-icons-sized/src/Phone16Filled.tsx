import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 2.75C4 1.78 4.78 1 5.75 1h4.5c.97 0 1.75.78 1.75 1.75v10.5c0 .97-.78 1.75-1.75 1.75h-4.5C4.78 15 4 14.22 4 13.25V2.75zM7 12a.5.5 0 000 1h2a.5.5 0 000-1H7z" fill={primaryFill} /></svg>;
}

const Phone16Filled = wrapIcon(rawSvg({}), 'Phone16Filled');
export default Phone16Filled;
      