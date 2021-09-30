import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.73 19.8a.75.75 0 001.04-1.1l-6.25-5.95h14.73a.75.75 0 000-1.5H5.52l6.25-5.95a.75.75 0 00-1.04-1.1l-7.42 7.08a1 1 0 000 1.44l7.42 7.07z" fill={primaryFill} /></svg>;
}

const ArrowLeft24Regular = wrapIcon(rawSvg({}), 'ArrowLeft24Regular');
export default ArrowLeft24Regular;
      