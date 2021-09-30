import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 12a2 2 0 110-4 2 2 0 010 4z" fill={primaryFill} /><path d="M18 10a4 4 0 00-4-4H6a4 4 0 100 8h8a4 4 0 004-4zm-4-3a3 3 0 110 6H6a3 3 0 110-6h8z" fill={primaryFill} /></svg>;
}

const ToggleLeft20Regular = wrapIcon(rawSvg({}), 'ToggleLeft20Regular');
export default ToggleLeft20Regular;
      