import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.18 2c-.56 0-1.06.38-1.2.93L5.29 20.5H2.75a.75.75 0 000 1.5h18.5a.75.75 0 000-1.5h-2.54L14.02 2.93a1.25 1.25 0 00-1.2-.93h-1.64zM6.84 20.5l.94-3.5h5.97a.75.75 0 000-1.5H8.18l.53-2h4.04a.75.75 0 000-1.5H9.11l2.27-8.5h1.24l4.54 17H6.84z" fill={primaryFill} /></svg>;
}

const RoadCone24Regular = wrapIcon(rawSvg({}), 'RoadCone24Regular');
export default RoadCone24Regular;
      