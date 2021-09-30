import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.78 13.92A.5.5 0 013 13.5V4.01c0-1.1.9-2 2-2h6A2 2 0 0113 4v9.5a.5.5 0 01-.78.42L8 11.1l-4.22 2.82z" fill={primaryFill} /></svg>;
}

const Bookmark16Filled = wrapIcon(rawSvg({}), 'Bookmark16Filled');
export default Bookmark16Filled;
      