import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 4c0-.83.67-1.5 1.5-1.5h8.15A1.5 1.5 0 0115.5 4v12c0 .83-.67 1.5-1.5 1.5H6A1.5 1.5 0 014.5 16V4zM7 11a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
}

const Door20Filled = wrapIcon(rawSvg({}), 'Door20Filled');
export default Door20Filled;
      