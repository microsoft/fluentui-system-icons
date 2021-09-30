import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.83 3.44A1 1 0 0018 3H5.88a1 1 0 00-.77.55l-3 6-.06.13a1 1 0 00.2.99l8.99 9.98c.14.17.33.28.53.32l.11.02a1 1 0 00.56-.09A4.38 4.38 0 0112 19v-.5a2.5 2.5 0 012.5-2.5h.95A3.74 3.74 0 0118 9.5c1.35 0 2.53.71 3.2 1.78l.54-.61.09-.1a1 1 0 00.06-1.02l-3-6-.06-.1zM9.43 11h5.15L12 17.34 9.42 11zm-4.18 0h2.01l1.66 4.09L5.25 11zm1.37-6h2l-1.3 4h-2.7l2-4zm4.1 0h2.55l1.3 4H9.43l1.3-4zm4.66 0h2l2 4h-2.7l-1.3-4zm6.12 12c.83 0 1.5.67 1.5 1.5v.5c0 1.97-1.86 4-5 4-3.14 0-5-2.03-5-4v-.5c0-.83.67-1.5 1.5-1.5h7zM18 10.5a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5z" fill={primaryFill} /></svg>;
}

const PremiumPerson24Filled = wrapIcon(rawSvg({}), 'PremiumPerson24Filled');
export default PremiumPerson24Filled;
      