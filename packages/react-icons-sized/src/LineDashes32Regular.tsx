import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M28.7 3.3a1 1 0 010 1.4l-1 1a1 1 0 11-1.4-1.4l1-1a1 1 0 011.4 0zm-5 5a1 1 0 010 1.4l-2 2a1 1 0 01-1.4-1.4l2-2a1 1 0 011.4 0zm-6 6a1 1 0 010 1.4l-2 2a1 1 0 01-1.4-1.4l2-2a1 1 0 011.4 0zm-6 6a1 1 0 010 1.4l-2 2a1 1 0 01-1.4-1.4l2-2a1 1 0 011.4 0zm-6 6a1 1 0 010 1.4l-1 1a1 1 0 01-1.4-1.4l1-1a1 1 0 011.4 0z" fill={primaryFill} /></svg>;
}

const LineDashes32Regular = wrapIcon(rawSvg({}), 'LineDashes32Regular');
export default LineDashes32Regular;
      