import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.84 2.19a1.96 1.96 0 00-1.68 0L.29 4.49a.5.5 0 00-.29.49V8a.5.5 0 101 0V5.76l1 .5V9c0 .13.05.26.15.36l.02.02a3.48 3.48 0 00.28.24c.19.16.46.36.8.56.66.4 1.63.82 2.75.82s2.09-.42 2.76-.82a6.74 6.74 0 001.07-.8l.02-.02A.5.5 0 0010 9V6.25l1.72-.85a.5.5 0 000-.9L6.83 2.19zm.03 5.61L9 6.75v2.03a4.86 4.86 0 01-.76.54C7.66 9.67 6.88 10 6 10c-.88 0-1.66-.33-2.24-.68A5.74 5.74 0 013 8.78V6.75L5.13 7.8c.55.28 1.2.28 1.74 0zm-.46-4.7l3.94 1.86-3.92 1.95a.96.96 0 01-.86 0L1.65 4.96l3.94-1.87a.96.96 0 01.82 0zM2.15 9.35z" fill={primaryFill} /></svg>;
}

const HatGraduation12Regular = wrapIcon(rawSvg({}), 'HatGraduation12Regular');
export default HatGraduation12Regular;
      