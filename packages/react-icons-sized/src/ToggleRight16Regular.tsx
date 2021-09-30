import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 10a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /><path d="M1 8a4 4 0 014-4h6a4 4 0 010 8H5a4 4 0 01-4-4zm4-3a3 3 0 000 6h6a3 3 0 100-6H5z" fill={primaryFill} /></svg>;
}

const ToggleRight16Regular = wrapIcon(rawSvg({}), 'ToggleRight16Regular');
export default ToggleRight16Regular;
      