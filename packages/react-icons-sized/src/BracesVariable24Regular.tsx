import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 5.75A2.75 2.75 0 016.25 3a.75.75 0 010 1.5C5.56 4.5 5 5.06 5 5.75v4.3c0 .75-.3 1.45-.8 1.95.5.5.8 1.2.8 1.94v4.31c0 .69.56 1.25 1.25 1.25a.75.75 0 010 1.5 2.75 2.75 0 01-2.75-2.75v-4.3c0-.55-.34-1.02-.85-1.2l-.14-.04a.75.75 0 010-1.42l.14-.05c.5-.17.85-.64.85-1.18V5.75zm17 0A2.75 2.75 0 0017.75 3a.75.75 0 000 1.5c.69 0 1.25.56 1.25 1.25v4.3c0 .75.3 1.45.8 1.95-.5.5-.8 1.2-.8 1.94v4.31c0 .69-.56 1.25-1.25 1.25a.75.75 0 000 1.5 2.75 2.75 0 002.75-2.75v-4.3c0-.55.34-1.02.85-1.2l.14-.04a.75.75 0 000-1.42l-.14-.05a1.25 1.25 0 01-.85-1.18V5.75zM9.1 7.04a.75.75 0 10-1.2.92L11.06 12l-3.14 4.04a.75.75 0 001.18.92L12 13.22l2.9 3.74a.75.75 0 001.2-.92L12.94 12l3.14-4.04a.75.75 0 00-1.18-.92L12 10.78 9.1 7.04z" fill={primaryFill} /></svg>;
}

const BracesVariable24Regular = wrapIcon(rawSvg({}), 'BracesVariable24Regular');
export default BracesVariable24Regular;
      