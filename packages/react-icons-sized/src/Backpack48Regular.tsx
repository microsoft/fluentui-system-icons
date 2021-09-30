import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 21.18A2.82 2.82 0 0018.82 24h10.36A2.82 2.82 0 0032 21.18 5.18 5.18 0 0026.82 16h-5.64A5.18 5.18 0 0016 21.18zm5.18-2.68h5.64c1.48 0 2.68 1.2 2.68 2.68 0 .18-.14.32-.32.32H18.82a.32.32 0 01-.32-.32c0-1.48 1.2-2.68 2.68-2.68z" fill={primaryFill} /><path d="M24 4a8 8 0 00-7.95 7.11A16 16 0 008 25v13.75c0 2.9 2.35 5.25 5.25 5.25h21.5c2.9 0 5.25-2.35 5.25-5.25V25a16 16 0 00-8.05-13.89A8 8 0 0024 4zm13.5 24h-27v-3a13.5 13.5 0 0127 0v3zM16 30.5v3.25a1.25 1.25 0 102.5 0V30.5h19v8.25a2.75 2.75 0 01-2.75 2.75h-21.5a2.75 2.75 0 01-2.75-2.75V30.5H16zM24 9c-1.76 0-3.46.29-5.05.81a5.5 5.5 0 0110.1 0A15.98 15.98 0 0024 9z" fill={primaryFill} /></svg>;
}

const Backpack48Regular = wrapIcon(rawSvg({}), 'Backpack48Regular');
export default Backpack48Regular;
      