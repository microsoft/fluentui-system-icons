import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.35 4.45c-.8-.6-1.9-.6-2.7 0L6.71 16.35a1.75 1.75 0 001.05 3.15h32.48c1.69 0 2.4-2.14 1.05-3.15L25.35 4.45zM24 14a2 2 0 110-4 2 2 0 010 4zM6 38.25C6 35.35 8.35 33 11.25 33h25.5c2.9 0 5.25 2.35 5.25 5.25v1.5c0 .69-.56 1.25-1.25 1.25H7.25C6.56 41 6 40.44 6 39.75v-1.5zM14 31h-4v-9.5h4V31zm4-9.5V31h4v-9.5h-4zm8 0V31h4v-9.5h-4zm8 0V31h4v-9.5h-4z" fill={primaryFill} /></svg>;
}

const BuildingBank48Filled = wrapIcon(rawSvg({}), 'BuildingBank48Filled');
export default BuildingBank48Filled;
      