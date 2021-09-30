import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.53 14.47c.3.3.3.77 0 1.06l-1.5 1.5a.75.75 0 01-1.06-1.06l1.5-1.5c.3-.3.77-.3 1.06 0zM3.28 2.22a.75.75 0 10-1.06 1.06l6.03 6.03v1.38L3.03 15.9c-.88.88-.88 2.3 0 3.18l1.88 1.88c.88.88 2.3.88 3.18 0l5.22-5.22h1.38l6.03 6.03a.75.75 0 001.06-1.06L3.28 2.22zM9 12.06L11.94 15l-4.91 4.9c-.3.3-.77.3-1.06 0l-1.88-1.87a.75.75 0 010-1.06L9 12.07zm8.84 2.03l1.57-1.56c.3-.3.3-.77 0-1.06l-6.88-6.88a.75.75 0 00-1.06 0L9.9 6.16 8.84 5.09l1.57-1.56c.88-.88 2.3-.88 3.18 0l6.88 6.88c.88.88.88 2.3 0 3.18l-1.57 1.57-1.06-1.07z" fill={primaryFill} /></svg>;
}

const FlashlightOff24Regular = wrapIcon(rawSvg({}), 'FlashlightOff24Regular');
export default FlashlightOff24Regular;
      