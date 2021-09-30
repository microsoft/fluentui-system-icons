import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.82-12.66a5 5 0 00-5.36 8.2.5.5 0 01-.7.7 6 6 0 016.42-9.83.5.5 0 01-.36.93zm3.77 2.48a6 6 0 01-1.35 6.42.5.5 0 11-.7-.7 5 5 0 001.12-5.36.5.5 0 01.93-.36zm-1.5-2a.5.5 0 01.1.62l-.1.2a323.59 323.59 0 01-.69 1.2l-.23.4-.3.53a184.46 184.46 0 01-1.48 2.48 4.28 4.28 0 01-.16.23 1.5 1.5 0 11-2.28-1.95c.07-.09.2-.2.34-.33l.56-.48a125.12 125.12 0 012.96-2.4l.27-.22.37-.3a.5.5 0 01.64.02z" fill={primaryFill} /></svg>;
}

const Gauge20Filled = wrapIcon(rawSvg({}), 'Gauge20Filled');
export default Gauge20Filled;
      