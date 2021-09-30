import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 21.25c0 .41-.34.75-.75.75h-6.5A3.75 3.75 0 019 18.25V4.59L5.28 8.3a.75.75 0 01-.98.08l-.08-.08a.75.75 0 01-.07-.97l.07-.09 5-5a.75.75 0 01.98-.07l.08.07 5 5a.75.75 0 01-.98 1.14l-.08-.08L10.5 4.6v13.66c0 1.19.93 2.17 2.1 2.24l.15.01h6.5c.41 0 .75.34.75.75z" fill={primaryFill} /></svg>;
}

const ArrowEnterUp24Regular = wrapIcon(rawSvg({}), 'ArrowEnterUp24Regular');
export default ArrowEnterUp24Regular;
      