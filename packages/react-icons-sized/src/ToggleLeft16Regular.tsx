import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 10a2 2 0 110-4 2 2 0 010 4z" fill={primaryFill} /><path d="M15 8a4 4 0 00-4-4H5a4 4 0 100 8h6a4 4 0 004-4zm-4-3a3 3 0 110 6H5a3 3 0 010-6h6z" fill={primaryFill} /></svg>;
}

const ToggleLeft16Regular = wrapIcon(rawSvg({}), 'ToggleLeft16Regular');
export default ToggleLeft16Regular;
      