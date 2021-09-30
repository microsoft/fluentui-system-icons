import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 18c.38 0 .7-.28.74-.65l.01-.1V4.56l2.22 2.22c.27.27.68.3.98.07l.08-.07a.75.75 0 00.07-.98l-.07-.08-3.5-3.5a.75.75 0 00-.98-.07l-.08.07-3.5 3.5a.75.75 0 00.98 1.13l.08-.07L6 4.56v12.69c0 .41.34.75.75.75zm10.5 0c.38 0 .7-.28.74-.65V4.56l2.23 2.22c.26.27.68.3.97.07l.09-.07c.26-.27.29-.68.07-.98l-.07-.08-3.5-3.5a.75.75 0 00-.98-.07l-.08.07-3.5 3.5a.75.75 0 00.97 1.13l.09-.07 2.22-2.22v12.69c0 .41.33.75.75.75zm-10.5 4a4.75 4.75 0 001.75-9.17v1.68a3.25 3.25 0 11-3.5 0v-1.68A4.75 4.75 0 006.75 22zm10.5 0A4.75 4.75 0 0019 12.83v1.68a3.25 3.25 0 11-3.5 0v-1.68A4.75 4.75 0 0017.25 22z" fill={primaryFill} /></svg>;
}

const DoubleSwipeUp24Regular = wrapIcon(rawSvg({}), 'DoubleSwipeUp24Regular');
export default DoubleSwipeUp24Regular;
      