import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.77 2a1.5 1.5 0 00-1.43 1.06L5.76 28H3a1 1 0 100 2h26a1 1 0 100-2h-2.76L18.66 3.06A1.5 1.5 0 0017.23 2h-2.46zM7.85 28l1.66-5.46a1 1 0 00.49.13h8.5a1 1 0 100-2h-8.42l.8-2.67H17a1 1 0 100-2h-5.5l3.64-12h1.72l7.3 24H7.84z" fill={primaryFill} /></svg>;
}

const RoadCone32Regular = wrapIcon(rawSvg({}), 'RoadCone32Regular');
export default RoadCone32Regular;
      