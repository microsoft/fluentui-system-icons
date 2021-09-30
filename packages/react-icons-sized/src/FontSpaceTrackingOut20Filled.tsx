import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2c.31 0 .59.2.7.48l3.25 8.5a.75.75 0 01-1.4.53L7.78 9.5H4.22l-.77 2.01a.75.75 0 01-1.4-.53l3.25-8.5A.75.75 0 016 2zM4.8 8h2.4L6 4.85 4.8 8z" fill={primaryFill} /><path d="M14.68 13.26a.75.75 0 011.06-.07l2 1.74a.75.75 0 010 1.13l-2 1.75a.75.75 0 11-.99-1.12l.5-.44H4.75l.5.44a.75.75 0 11-1 1.12l-2-1.74a.75.75 0 010-1.13l2-1.75a.75.75 0 011 1.12l-.5.44h10.5l-.5-.44a.75.75 0 01-.07-1.05z" fill={primaryFill} /><path d="M14.7 11.52a.75.75 0 01-1.4 0l-3.25-8.5a.75.75 0 011.4-.53L14 9.15l2.55-6.66a.75.75 0 011.4.53l-3.25 8.5z" fill={primaryFill} /></svg>;
}

const FontSpaceTrackingOut20Filled = wrapIcon(rawSvg({}), 'FontSpaceTrackingOut20Filled');
export default FontSpaceTrackingOut20Filled;
      