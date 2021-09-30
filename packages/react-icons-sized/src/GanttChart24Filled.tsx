import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7.25C2 5.45 3.46 4 5.25 4h3v3H6a2 2 0 100 4h2.25v9h-3A3.25 3.25 0 012 16.75v-9.5zM9.25 20v-9H10v1c0 1.1.9 2 2 2h1v1a2 2 0 001.75 1.98V20h-5.5zM12 10h2.75V4h-5.5v3H10a2 2 0 012 2v1zm6 7h-2.25v3h3c1.8 0 3.25-1.46 3.25-3.25v-9.5C22 5.45 20.54 4 18.75 4h-3v6H16a2 2 0 012 2v1a2 2 0 110 4zM6 8a1 1 0 000 2h4a1 1 0 100-2H6zm5 4a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm4 2a1 1 0 100 2h3a1 1 0 100-2h-3z" fill={primaryFill} /></svg>;
}

const GanttChart24Filled = wrapIcon(rawSvg({}), 'GanttChart24Filled');
export default GanttChart24Filled;
      