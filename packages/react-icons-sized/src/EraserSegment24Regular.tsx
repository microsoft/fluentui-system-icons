import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.84 2.66c-.87-.89-2.3-.9-3.19-.02l-9.6 9.5c-.89.89-.89 2.33.01 3.21l5.1 5c.47.47 1.08.68 1.69.65h6.26a2.5 2.5 0 100-1.5h-3.95l8.58-8.67c.87-.88.87-2.28.01-3.16l-4.9-5zM9.75 19.5a.75.75 0 01-.54-.21l-5.1-5.01a.75.75 0 010-1.07l1.53-1.51 6.1 6.1-1.47 1.48c-.13.13-.3.2-.47.22h-.05zm3.96-15.8c.3-.29.77-.29 1.06.01l4.91 5.01c.29.3.29.76 0 1.05l-6.89 6.96-6.09-6.09 7-6.94z" fill={primaryFill} /></svg>;
}

const EraserSegment24Regular = wrapIcon(rawSvg({}), 'EraserSegment24Regular');
export default EraserSegment24Regular;
      