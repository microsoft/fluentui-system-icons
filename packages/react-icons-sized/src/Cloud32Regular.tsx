import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.4 10a6.46 6.46 0 00-1.4 4 1 1 0 01-1 1c-3.62 0-5 2.53-5 4 0 .85.22 1.84.88 2.6C5.52 22.31 6.7 23 9 23h14c1.85 0 3.08-.45 3.84-1.11.74-.64 1.16-1.6 1.16-2.89 0-1.16-.56-2.14-1.49-2.85A5.85 5.85 0 0023 15a1 1 0 01-1-1c0-2.2-.87-3.67-2-4.6A6.46 6.46 0 0016 8c-2.2 0-3.67.87-4.6 2zM9.85 8.75A7.64 7.64 0 0116 6c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 012.7 5.2c1.37.17 2.7.69 3.78 1.51A5.55 5.55 0 0130 19c0 1.75-.58 3.3-1.84 4.4C26.92 24.48 25.15 25 23 25H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 012 19c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 011.8-4.3z" fill={primaryFill} /></svg>;
}

const Cloud32Regular = wrapIcon(rawSvg({}), 'Cloud32Regular');
export default Cloud32Regular;
      