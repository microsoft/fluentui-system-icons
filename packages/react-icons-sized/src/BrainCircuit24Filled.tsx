import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.14 2c.7 0 1.11.71 1.11 1.42v4.33h-.9a2 2 0 100 1.5h.9v10.9c0 .6-.25 1.19-.78 1.46A3.4 3.4 0 018.9 22a4.24 4.24 0 01-3.36-1.67 5.17 5.17 0 01-1.02-2.14c-.4-.12-.86-.34-1.27-.69A3.83 3.83 0 012 14.47c0-.76.05-1.42.19-1.97H6.4c.68 0 1.24.5 1.34 1.15a2 2 0 101.5 0A2.85 2.85 0 006.4 11H3.04a2.04 2.04 0 01.5-.3 4.9 4.9 0 01-.18-1.13c-.04-.73.07-1.5.3-2.18a4.2 4.2 0 011.03-1.77c.3-.29.68-.5 1.1-.57.2-.84.7-1.53 1.35-2.04.83-.65 1.92-1 3-1zm2.61 15h1.65a2.85 2.85 0 002.85-2.85v-1.8a2 2 0 10-1.5 0v1.8c0 .75-.6 1.35-1.35 1.35h-1.65V3.42c0-.71.4-1.41 1.11-1.41 1.08 0 2.17.35 3 1 .65.5 1.16 1.2 1.35 2.04.42.07.8.28 1.1.57.48.45.82 1.1 1.04 1.77.22.68.33 1.45.3 2.18a4.9 4.9 0 01-.18 1.13l.06.03c.37.17.67.45.9.8.42.7.57 1.68.57 2.94 0 1.44-.55 2.42-1.26 3.03-.41.35-.87.57-1.27.7-.14.68-.49 1.46-1.02 2.13A4.24 4.24 0 0115.09 22a3.4 3.4 0 01-1.56-.4c-.53-.26-.78-.86-.78-1.45V17zM8 8.5a.5.5 0 111 0 .5.5 0 01-1 0zm.5 6.5a.5.5 0 100 1 .5.5 0 000-1zm7.5-4.5a.5.5 0 101 0 .5.5 0 00-1 0z" fill={primaryFill} /></svg>;
}

const BrainCircuit24Filled = wrapIcon(rawSvg({}), 'BrainCircuit24Filled');
export default BrainCircuit24Filled;
      