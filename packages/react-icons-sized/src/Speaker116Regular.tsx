import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.7 2.04c.18.08.3.26.3.46v11a.5.5 0 01-.85.36l-2.93-2.88H3.5A1.5 1.5 0 012 9.48V6.5C2 5.66 2.67 5 3.5 5h1.72l2.93-2.85a.5.5 0 01.54-.1zM8 3.69L5.78 5.85a.5.5 0 01-.35.14H3.5a.5.5 0 00-.5.5v3c0 .27.22.5.5.5h1.93a.5.5 0 01.35.13L8 12.31V3.69z" fill={primaryFill} /><path d="M10.11 5.19a.5.5 0 01.7-.08h.01l.02.02a1.6 1.6 0 01.19.18c.1.12.26.3.4.54.3.48.57 1.2.57 2.15a4.1 4.1 0 01-.97 2.69 2.46 2.46 0 01-.2.2h-.02s-.44.24-.7-.08a.5.5 0 01.08-.7l.02-.01.08-.09c.08-.08.18-.2.29-.38.2-.35.42-.88.42-1.63a3.09 3.09 0 00-.7-2 1.49 1.49 0 00-.11-.11.5.5 0 01-.08-.7z" fill={primaryFill} /></svg>;
}

const Speaker116Regular = wrapIcon(rawSvg({}), 'Speaker116Regular');
export default Speaker116Regular;
      