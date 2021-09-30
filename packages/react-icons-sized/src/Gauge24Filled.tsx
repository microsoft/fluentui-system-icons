import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 22a10 10 0 100-20 10 10 0 000 20zm3.88-15.33a.63.63 0 01.96.76l-.13.25a354.7 354.7 0 01-3.02 5.67c-.12.2-.24.4-.32.5a1.88 1.88 0 01-2.94-2.33 37.2 37.2 0 011.1-1.05 154.39 154.39 0 014.14-3.62l.2-.18zM7.93 17.13c-.29.29-.76.29-1.06 0a7.25 7.25 0 016.8-12.19.75.75 0 11-.34 1.46 5.75 5.75 0 00-5.4 9.67c.3.29.3.76 0 1.06zm9.96-7.99c.39-.14.82.07.95.46a7.25 7.25 0 01-1.71 7.53.75.75 0 11-1.06-1.06 5.75 5.75 0 001.36-5.97.75.75 0 01.46-.96z" fill={primaryFill} /></svg>;
}

const Gauge24Filled = wrapIcon(rawSvg({}), 'Gauge24Filled');
export default Gauge24Filled;
      