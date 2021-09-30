import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3a1 1 0 011-1h2a1 1 0 011 1v1h.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 012 8.5v-3C2 4.67 2.67 4 3.5 4H4V3zm3 0H5v1h2V3zM3.5 5a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-5z" fill={primaryFill} /></svg>;
}

const Briefcase12Regular = wrapIcon(rawSvg({}), 'Briefcase12Regular');
export default Briefcase12Regular;
      