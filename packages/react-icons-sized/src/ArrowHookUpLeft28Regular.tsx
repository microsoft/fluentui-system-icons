import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 21.25c0 .41.34.75.75.75h7c2.34 0 4.26-.78 5.5-2.02A6.22 6.22 0 0023 15.5c0-1.62-.52-3.26-1.75-4.48A7.69 7.69 0 0015.75 9H7.56l3.22-3.22a.75.75 0 10-1.06-1.06l-4.5 4.5a.75.75 0 000 1.06l4.5 4.5a.75.75 0 101.06-1.06L7.56 10.5h8.19c1.99 0 3.43.66 4.35 1.58.93.93 1.4 2.17 1.4 3.42s-.47 2.5-1.4 3.42a5.97 5.97 0 01-4.35 1.58h-7a.75.75 0 00-.75.75z" fill={primaryFill} /></svg>;
}

const ArrowHookUpLeft28Regular = wrapIcon(rawSvg({}), 'ArrowHookUpLeft28Regular');
export default ArrowHookUpLeft28Regular;
      