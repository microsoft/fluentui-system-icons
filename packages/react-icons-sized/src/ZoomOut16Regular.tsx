import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 6a.5.5 0 000 1h4a.5.5 0 000-1h-4zm2 5c1.06 0 2.04-.37 2.8-.98l3.85 3.83a.5.5 0 00.7-.7L10.02 9.3A4.5 4.5 0 106.5 11zm0-8a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" fill={primaryFill} /></svg>;
}

const ZoomOut16Regular = wrapIcon(rawSvg({}), 'ZoomOut16Regular');
export default ZoomOut16Regular;
      