import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.07 3.24A.5.5 0 015.5 3h9c.18 0 .34.1.43.24l3 5c.1.19.09.42-.05.58l-.4.49A3.01 3.01 0 0015 8h1.62l-2.4-4h-1.98l1.6 4H15a3 3 0 00-2.24 1H7.23L10 16.12l.03-.08a4.95 4.95 0 00.4 1.39l.1.21-.15.18a.5.5 0 01-.76 0l-7.5-9a.5.5 0 01-.05-.58l3-5zm.71.76l-2.4 4h2.78l1.6-4H5.78zm2.64 10.83L6.16 9h-2.6l4.86 5.83zM8.84 4l-1.6 4h5.52l-1.6-4H8.84zm2.4 12.8a3.37 3.37 0 01-.24-1.3 1.5 1.5 0 011.5-1.5h5c.83 0 1.5.67 1.5 1.5 0 1.12-.46 2.01-1.21 2.61-.74.6-1.74.89-2.79.89a4.43 4.43 0 01-2.79-.89 3.18 3.18 0 01-.97-1.31zm2.4-7.26A2 2 0 0117 11a2 2 0 11-3.37-1.46z" fill={primaryFill} /></svg>;
}

const PremiumPerson20Regular = wrapIcon(rawSvg({}), 'PremiumPerson20Regular');
export default PremiumPerson20Regular;
      