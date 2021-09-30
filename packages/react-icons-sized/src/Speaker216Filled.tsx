import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 2.5a.5.5 0 00-.85-.36L5.22 5H3.5C2.67 5 2 5.66 2 6.5v3c0 .82.67 1.5 1.5 1.5h1.72l2.93 2.87A.5.5 0 009 13.5v-11z" fill={primaryFill} /><path d="M10.11 5.19a.5.5 0 01.7-.08h.01l.02.02a1.6 1.6 0 01.19.18c.1.12.26.3.4.54.3.48.57 1.2.57 2.15a4.1 4.1 0 01-.97 2.69 2.46 2.46 0 01-.2.2h-.02s-.44.24-.7-.08a.5.5 0 01.08-.7l.02-.01.08-.09c.08-.08.18-.2.29-.38.2-.35.42-.88.42-1.63a3.09 3.09 0 00-.7-2 1.49 1.49 0 00-.11-.11.5.5 0 01-.08-.7z" fill={primaryFill} /><path d="M11.81 3.1a.5.5 0 10-.62.8h.01a2.3 2.3 0 01.25.24A5.51 5.51 0 0113 8a5.52 5.52 0 01-1.8 4.1h-.01a.5.5 0 00.62.8l.04-.04a2.9 2.9 0 00.32-.3A6.48 6.48 0 0014 8a6.54 6.54 0 00-2.15-4.86l-.03-.02V3.1z" fill={primaryFill} /></svg>;
}

const Speaker216Filled = wrapIcon(rawSvg({}), 'Speaker216Filled');
export default Speaker216Filled;
      