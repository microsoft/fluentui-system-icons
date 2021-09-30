import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.25 2.5c.41 0 .75.34.75.75v6.5c0 .41-.34.75-.75.75h-6.5a.75.75 0 010-1.5h4.66c-1.68-2.53-5.07-4.5-9.16-4.5-4.22 0-7.54 2-9.87 5.65a.75.75 0 11-1.26-.8C5.69 5.3 9.47 3 14.25 3c4.43 0 8.23 2.07 10.25 4.94V3.25c0-.41.34-.75.75-.75zM18.24 13a3.7 3.7 0 00-3.39 1.91A8.32 8.32 0 0014 19c0 1.5.22 2.97.86 4.09A3.7 3.7 0 0018.24 25a3.7 3.7 0 003.38-1.91c.65-1.12.87-2.59.87-4.09s-.22-2.97-.87-4.09A3.7 3.7 0 0018.24 13zm-2.75 6c0-1.4.21-2.55.66-3.34a2.2 2.2 0 012.09-1.16 2.2 2.2 0 012.08 1.16c.45.79.67 1.94.67 3.34s-.22 2.55-.67 3.34a2.2 2.2 0 01-2.08 1.16 2.2 2.2 0 01-2.09-1.16A6.89 6.89 0 0115.5 19zm-4.8-5.86a.75.75 0 01.31.63v10.48a.75.75 0 01-1.5 0V15.9a9.3 9.3 0 01-1.86 1.5.75.75 0 11-.78-1.3 8.62 8.62 0 002.84-2.86.75.75 0 01.99-.1z" fill={primaryFill} /></svg>;
}

const SkipForward1028Regular = wrapIcon(rawSvg({}), 'SkipForward1028Regular');
export default SkipForward1028Regular;
      