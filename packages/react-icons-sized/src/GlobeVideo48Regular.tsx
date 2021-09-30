import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 24a20 20 0 0139.96-1.22c-.71.08-1.44.32-2.12.74a6.55 6.55 0 00-.36-.35 17.44 17.44 0 00-.86-4.67h-7c.14.97.24 1.97.3 3h-2.5a35.18 35.18 0 00-.33-3H15.91a36.32 36.32 0 00.08 11.5h3.51v2.5h-2.98c.44 1.7 1 3.23 1.64 4.52.44.88.9 1.6 1.34 2.2v1.85c0 .97.21 1.9.6 2.72A20 20 0 013 24zM23 6.5c-1.3 0-3.16 1.12-4.84 4.48A23.43 23.43 0 0016.4 16h13.2c-.45-1.9-1.05-3.6-1.77-5.02C26.16 7.62 24.3 6.5 23 6.5zm5.59.91c1.56 2.11 2.81 5.1 3.58 8.59h6.4a17.55 17.55 0 00-9.98-8.59zM17.4 40.6c-1.49-2.01-2.7-4.8-3.46-8.09H7.7a17.55 17.55 0 009.71 8.09zM13.46 30a38.8 38.8 0 01-.08-11.5h-7A17.48 17.48 0 006.56 30h6.9zm.37-14c.77-3.5 2.02-6.48 3.58-8.59A17.55 17.55 0 007.43 16h6.4zm11.18 27.9A3 3 0 0123 41.07V28a3 3 0 013-3h10.13a3 3 0 013 3v.8l3.55-2.3.18-.1A1.5 1.5 0 0145 27.76v13.48a1.5 1.5 0 01-2.32 1.26l-3.55-2.3v.87a3 3 0 01-3 3H26a3 3 0 01-.99-.17z" fill={primaryFill} /></svg>;
}

const GlobeVideo48Regular = wrapIcon(rawSvg({}), 'GlobeVideo48Regular');
export default GlobeVideo48Regular;
      