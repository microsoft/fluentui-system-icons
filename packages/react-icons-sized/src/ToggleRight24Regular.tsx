import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.75 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill={primaryFill} /><path d="M2 12a5 5 0 015-5h10a5 5 0 010 10H7a5 5 0 01-5-5zm5-3.5a3.5 3.5 0 100 7h10a3.5 3.5 0 100-7H7z" fill={primaryFill} /></svg>;
}

const ToggleRight24Regular = wrapIcon(rawSvg({}), 'ToggleRight24Regular');
export default ToggleRight24Regular;
      