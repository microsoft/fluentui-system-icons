import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.65 4.36C10.2 7.21 11 9.5 11 11.08s-.74 2.9-1.46 3.52l-.2.14-.11.05a.45.45 0 01-.64-.49l.03-.09c.61-1.51.9-3 .88-4.46A.75.75 0 008 9.72v.03c.01.37 0 .74-.05 1.12l-.06.47-.04.24-.07.33-.1.41-.05.16c-.17.6-.4 1.21-.68 1.83a7.1 7.1 0 01-3.91 3.64.75.75 0 11-.58-1.39c.97-.4 1.74-.94 2.33-1.62-1.67-.53-2.63-1.67-2.77-3.27-.15-1.81.54-3.04 2.26-4.41l.5-.38.35-.27.37-.29a8.81 8.81 0 001.87-1.98c.3-.46 1-.47 1.28.02zM17 6a3 3 0 013 2.82V10l1 .02a1 1 0 011 .88v2.12a1 1 0 01-.87.99H21L20 14v1a3 3 0 01-2.82 3H8.24a1 1 0 01-.11-2h.82l.1-.02c.75-.17 2.95-1.2 2.95-4.96 0-1.22-.3-2.57-.9-4.06a.7.7 0 01.55-.95l.1-.01H17z" fill={primaryFill} /></svg>;
}

const BatterySaver24Filled = wrapIcon(rawSvg({}), 'BatterySaver24Filled');
export default BatterySaver24Filled;
      