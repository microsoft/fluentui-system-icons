import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.53 1.72a.75.75 0 00-1.06 0l-4 4a.75.75 0 001.06 1.06l2.72-2.72v10.19a.75.75 0 001.5 0V4.06l2.72 2.72a.75.75 0 101.06-1.06l-4-4zM4.5 16.5a.75.75 0 000 1.5h11a.75.75 0 000-1.5h-11z" fill={primaryFill} /></svg>;
}

const ArrowExportUpFilled = wrapIcon(rawSvg({}), 'ArrowExportUpFilled');
export default ArrowExportUpFilled;
      