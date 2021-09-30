import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.09 2.6a3.25 3.25 0 013.82 0l10.24 7.44a3.25 3.25 0 011.18 3.64l-3.9 12.04a3.25 3.25 0 01-3.1 2.24H9.67c-1.4 0-2.66-.9-3.1-2.24l-3.9-12.04a3.25 3.25 0 011.18-3.64L14.09 2.6zm2.64 1.62a1.25 1.25 0 00-1.46 0L5.02 11.66c-.43.32-.62.88-.45 1.4L8.48 25.1c.17.51.65.86 1.19.86h12.66c.54 0 1.02-.35 1.19-.86l3.91-12.04a1.25 1.25 0 00-.45-1.4L16.73 4.22z" fill={primaryFill} /></svg>;
}

const Pentagon32Regular = wrapIcon(rawSvg({}), 'Pentagon32Regular');
export default Pentagon32Regular;
      