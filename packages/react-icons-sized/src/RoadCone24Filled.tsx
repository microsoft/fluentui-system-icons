import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.2 2c-.58 0-1.08.4-1.22.96A325.4 325.4 0 017.59 12h5.16a.75.75 0 010 1.5H7.18l-.55 2h7.12a.75.75 0 010 1.5H6.22l-.93 3.5H2.75a.75.75 0 000 1.5h18.5a.75.75 0 000-1.5h-2.54L14.02 2.93a1.25 1.25 0 00-1.2-.93h-1.63z" fill={primaryFill} /></svg>;
}

const RoadCone24Filled = wrapIcon(rawSvg({}), 'RoadCone24Filled');
export default RoadCone24Filled;
      