import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.7 2.3a1 1 0 00-1.4 0l-5 5a1 1 0 001.4 1.4L11 5.42V18a1 1 0 102 0V5.41l3.3 3.3a1 1 0 101.4-1.42l-5-5zM5.26 20.5a.75.75 0 000 1.5h13.5a.75.75 0 000-1.5H5.25z" fill={primaryFill} /></svg>;
}

const ArrowExportUp24Filled = wrapIcon(rawSvg({}), 'ArrowExportUp24Filled');
export default ArrowExportUp24Filled;
      