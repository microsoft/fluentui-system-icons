import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.98 6.42c.58.59.87 1.35.88 2.12.32.06.63.22.88.47l.01.02.33.35c.2.22.45.53.72.9.26.36.54.8.77 1.3.22.47.43 1.1.43 1.8 0 1.85-1.4 3.62-3.5 3.62-2 0-3.37-1.6-3.5-3.37l-1.27 1.28a3 3 0 01-4.24 0L3 13.4v4.09c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5h-7.94l1.42 1.42z" fill={primaryFill} /></svg>;
}

const ColorBackgroundAccent24Regular = wrapIcon(rawSvg({}), 'ColorBackgroundAccent24Regular');
export default ColorBackgroundAccent24Regular;
      