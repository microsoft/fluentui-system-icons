import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.93 16.07a.75.75 0 11-1.06 1.06 7.25 7.25 0 016.8-12.19.75.75 0 11-.34 1.46 5.75 5.75 0 00-5.4 9.67zm9.96-6.93c.39-.14.82.07.95.46a7.25 7.25 0 01-1.71 7.53.75.75 0 11-1.06-1.06 5.75 5.75 0 001.36-5.97.75.75 0 01.46-.96zm-2.01-2.47a.63.63 0 01.96.76l-.13.25a354.7 354.7 0 01-3.02 5.67c-.12.2-.24.4-.32.5a1.88 1.88 0 01-2.94-2.33 37.2 37.2 0 011.1-1.05 154.39 154.39 0 014.14-3.62l.2-.18zM22 12a10 10 0 11-20 0 10 10 0 0120 0zM3.5 12a8.5 8.5 0 1017 0 8.5 8.5 0 00-17 0z" fill={primaryFill} /></svg>;
}

const Gauge24Regular = wrapIcon(rawSvg({}), 'Gauge24Regular');
export default Gauge24Regular;
      