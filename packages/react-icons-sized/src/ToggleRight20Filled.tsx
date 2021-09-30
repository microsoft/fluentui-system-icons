import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 6a4 4 0 100 8h8a4 4 0 000-8H6zm8 6a2 2 0 110-4 2 2 0 010 4z" fill={primaryFill} /></svg>;
}

const ToggleRight20Filled = wrapIcon(rawSvg({}), 'ToggleRight20Filled');
export default ToggleRight20Filled;
      