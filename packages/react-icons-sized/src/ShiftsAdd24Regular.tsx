import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 6.25c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75v11.5c0 .97-.78 1.75-1.75 1.75h-5.06a6.47 6.47 0 01-.71 1.5h5.77c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25A3.25 3.25 0 003 6.25v5.77c.46-.3.97-.53 1.5-.7V6.24z" fill={primaryFill} /><path d="M6.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.5 8.5V18h2.5a.5.5 0 100-1H7v-2.5a.5.5 0 10-1 0V17H3.5a.5.5 0 000 1H6v2.5a.5.5 0 101 0z" fill={primaryFill} /><path d="M12.5 6.75a.75.75 0 00-1.5 0v6c0 .41.34.75.75.75h4.5a.75.75 0 000-1.5H12.5V6.75z" fill={primaryFill} /></svg>;
}

const ShiftsAdd24Regular = wrapIcon(rawSvg({}), 'ShiftsAdd24Regular');
export default ShiftsAdd24Regular;
      