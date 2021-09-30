import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.5 17c.3 0 .57-.18.69-.46l5.75-13.5a.75.75 0 00-1.38-.58L18.5 14.34 13.44 2.46a.75.75 0 00-1.38.58l5.75 13.5c.12.28.39.46.69.46z" fill={primaryFill} /><path d="M10.19 2.46a.75.75 0 00-1.38 0l-3.83 8.98-.01.03-1.91 4.49a.75.75 0 001.38.58l1.72-4.04h6.67l1.73 4.04a.75.75 0 101.38-.58l-1.88-4.41a.74.74 0 00-.08-.18l-3.8-8.91zm2 8.54H6.8l2.7-6.34L12.2 11z" fill={primaryFill} /><path d="M10.03 19.22a.75.75 0 10-1.06 1.06l1.47 1.47H3.75a.75.75 0 100 1.5h6.69l-1.47 1.47a.75.75 0 101.06 1.06l2.75-2.75c.29-.3.29-.77 0-1.06l-2.75-2.75z" fill={primaryFill} /><path d="M19.03 25.78c-.3.3-.77.3-1.06 0l-2.75-2.75a.75.75 0 010-1.06l2.75-2.75a.75.75 0 011.06 1.06l-1.47 1.47h6.7a.75.75 0 110 1.5h-6.7l1.47 1.47c.3.3.3.77 0 1.06z" fill={primaryFill} /></svg>;
}

const FontSpaceTrackingIn28Regular = wrapIcon(rawSvg({}), 'FontSpaceTrackingIn28Regular');
export default FontSpaceTrackingIn28Regular;
      