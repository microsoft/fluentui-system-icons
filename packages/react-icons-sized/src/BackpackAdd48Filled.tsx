import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.52 11.43a8.5 8.5 0 0116.96 0 16 16 0 017.39 11.51 12.96 12.96 0 00-8.16-.52c.19-.38.29-.8.29-1.24A5.18 5.18 0 0026.82 16h-5.64A5.18 5.18 0 0016 21.18 2.82 2.82 0 0018.82 24h9.25c-1.62 1.02-3 2.39-4.03 4H8v-3c0-5.72 3-10.74 7.52-13.57zm13.53-1.62a5.5 5.5 0 00-10.1 0 15.98 15.98 0 0110.1 0z" fill={primaryFill} /><path d="M22 35c0-1.58.28-3.1.8-4.5h-4.3v3.25a1.25 1.25 0 11-2.5 0V30.5H8v8.25c0 2.9 2.35 5.25 5.25 5.25h12.37A12.96 12.96 0 0122 35z" fill={primaryFill} /><path d="M18.5 21.18c0-1.48 1.2-2.68 2.68-2.68h5.64c1.48 0 2.68 1.2 2.68 2.68 0 .18-.14.32-.32.32H18.82a.32.32 0 01-.32-.32z" fill={primaryFill} /><path d="M46 35a11 11 0 11-22 0 11 11 0 0122 0zm-10-7a1 1 0 10-2 0v6h-6a1 1 0 100 2h6v6a1 1 0 102 0v-6h6a1 1 0 100-2h-6v-6z" fill={primaryFill} /></svg>;
}

const BackpackAdd48Filled = wrapIcon(rawSvg({}), 'BackpackAdd48Filled');
export default BackpackAdd48Filled;
      