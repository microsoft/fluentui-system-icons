import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.19 16.54a.75.75 0 01-1.38 0l-5.75-13.5a.75.75 0 011.38-.58l5.06 11.88 5.06-11.88a.75.75 0 011.38.58l-5.75 13.5z" fill={primaryFill} /><path d="M8.5 2c.3 0 .57.18.69.46l3.8 8.91.07.18 1.88 4.4a.75.75 0 01-1.38.6l-1.73-4.05H5.16l-1.72 4.04a.75.75 0 11-1.38-.58l1.9-4.49.02-.03L7.8 2.46A.75.75 0 018.5 2zm-2.7 9h5.4L8.5 4.66 5.8 11z" fill={primaryFill} /><path d="M21.97 19.22c.3-.3.77-.3 1.06 0l2.75 2.75c.29.3.29.77 0 1.06l-2.75 2.75a.75.75 0 11-1.06-1.06l1.47-1.47H4.56l1.47 1.47a.75.75 0 01-1.06 1.06l-2.75-2.75a.75.75 0 010-1.06l2.75-2.75a.75.75 0 111.06 1.06l-1.47 1.47h18.88l-1.47-1.47a.75.75 0 010-1.06z" fill={primaryFill} /></svg>;
}

const FontSpaceTrackingOut28Regular = wrapIcon(rawSvg({}), 'FontSpaceTrackingOut28Regular');
export default FontSpaceTrackingOut28Regular;
      