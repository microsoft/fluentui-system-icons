import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 6c.38 0 .7.28.74.65l.01.1v12.69l2.22-2.22a.75.75 0 01.98-.07l.08.07c.27.27.3.68.07.98l-.07.08-3.5 3.5a.75.75 0 01-.98.07l-.08-.07-3.5-3.5a.75.75 0 01.98-1.13l.08.07L6 19.44V6.75c0-.41.34-.75.75-.75zm10.5 0c.38 0 .7.28.74.65v12.79l2.23-2.22a.75.75 0 01.97-.07l.09.07c.26.27.29.68.07.98l-.07.08-3.5 3.5a.75.75 0 01-.98.07l-.08-.07-3.5-3.5a.75.75 0 01.97-1.13l.09.07 2.22 2.22V6.75c0-.41.33-.75.75-.75zM6.75 2a4.75 4.75 0 011.75 9.17V9.49a3.25 3.25 0 10-3.5 0v1.68A4.75 4.75 0 016.75 2zm10.5 0A4.75 4.75 0 0119 11.17V9.49a3.25 3.25 0 10-3.5 0v1.68A4.75 4.75 0 0117.25 2z" fill={primaryFill} /></svg>;
}

const DoubleSwipeDown24Regular = wrapIcon(rawSvg({}), 'DoubleSwipeDown24Regular');
export default DoubleSwipeDown24Regular;
      