import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 17a3 3 0 110-6 3 3 0 010 6z" fill={primaryFill} /><path d="M20 8a6 6 0 010 12H8A6 6 0 018 8h12zm4.5 6A4.5 4.5 0 0020 9.5H8a4.5 4.5 0 100 9h12a4.5 4.5 0 004.5-4.5z" fill={primaryFill} /></svg>;
}

const ToggleRight28Regular = wrapIcon(rawSvg({}), 'ToggleRight28Regular');
export default ToggleRight28Regular;
      