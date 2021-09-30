import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 3a1 1 0 100 2h2.5c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5H15a1 1 0 000 2h2.5a3.5 3.5 0 003.5-3.5v-11A3.5 3.5 0 0017.5 3H15z" fill={primaryFill} /><path d="M5 6.5C5 5.67 5.67 5 6.5 5H9a1 1 0 100-2H6.5A3.5 3.5 0 003 6.5v11A3.5 3.5 0 006.5 21H9a1 1 0 100-2H6.5A1.5 1.5 0 015 17.5v-11z" fill={primaryFill} /><path d="M12.5 7a1 1 0 10-2 0v6a1 1 0 001 1H16a1 1 0 000-2h-3.5V7z" fill={primaryFill} /></svg>;
}

const ShiftsOpen24Filled = wrapIcon(rawSvg({}), 'ShiftsOpen24Filled');
export default ShiftsOpen24Filled;
      