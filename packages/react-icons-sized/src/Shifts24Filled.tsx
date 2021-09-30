import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zm-6 3a.75.75 0 00-.75.75v6c0 .41.34.75.75.75h4.5a.75.75 0 000-1.5H12.5V6.75a.75.75 0 00-.75-.75z" fill={primaryFill} /></svg>;
}

const Shifts24Filled = wrapIcon(rawSvg({}), 'Shifts24Filled');
export default Shifts24Filled;
      