import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.75 9.25a.75.75 0 010 1.5h-5.5a.75.75 0 010-1.5h5.5z" fill={primaryFill} /><path d="M17.25 10a7.25 7.25 0 10-2.68 5.63l4.9 4.9.08.07a.75.75 0 00.98-1.13l-4.9-4.9A7.22 7.22 0 0017.25 10zm-13 0a5.75 5.75 0 1111.5 0 5.75 5.75 0 01-11.5 0z" fill={primaryFill} /></svg>;
}

const ZoomOut24Regular = wrapIcon(rawSvg({}), 'ZoomOut24Regular');
export default ZoomOut24Regular;
      