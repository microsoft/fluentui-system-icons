import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.28 2.22a.75.75 0 00-1.06 0l-5 5a.75.75 0 001.06 1.06L11 4.56v13.69a.75.75 0 001.5 0V4.56l3.72 3.72a.75.75 0 101.06-1.06l-5-5zM5.25 20.5a.75.75 0 000 1.5h13a.75.75 0 000-1.5h-13z" fill={primaryFill} /></svg>;
}

const ArrowExportUp24Regular = wrapIcon(rawSvg({}), 'ArrowExportUp24Regular');
export default ArrowExportUp24Regular;
      