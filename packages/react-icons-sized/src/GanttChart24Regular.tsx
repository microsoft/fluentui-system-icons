import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 8a1 1 0 000 2h4a1 1 0 100-2H6zm5 4a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm4 2a1 1 0 100 2h3a1 1 0 100-2h-3zM5.25 4A3.25 3.25 0 002 7.25v9.5C2 18.55 3.46 20 5.25 20h13.5c1.8 0 3.25-1.46 3.25-3.25v-9.5C22 5.45 20.54 4 18.75 4H5.25zM8 5.5V7h1.5V5.5h5V10H16V5.5h2.75c.97 0 1.75.78 1.75 1.75v9.5c0 .97-.78 1.75-1.75 1.75H16V17h-1a2 2 0 01-.5-.06v1.56h-5V11H8v7.5H5.25c-.97 0-1.75-.78-1.75-1.75v-9.5c0-.97.78-1.75 1.75-1.75H8z" fill={primaryFill} /></svg>;
}

const GanttChart24Regular = wrapIcon(rawSvg({}), 'GanttChart24Regular');
export default GanttChart24Regular;
      