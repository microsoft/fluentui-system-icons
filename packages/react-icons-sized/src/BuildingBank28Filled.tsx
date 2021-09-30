import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.11 2.3a1.5 1.5 0 011.78 0l9.5 7a1.5 1.5 0 01-.74 2.7H4.35a1.5 1.5 0 01-.74-2.7l9.5-7zM14 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5.5 4H22v6h-2.5v-6zm-2 6v-6H15v6h2.5zM13 19v-6h-2.5v6H13zm-4.5 0v-6H6v6h2.5zm-2.25 1A3.25 3.25 0 003 23.25v.5c0 .41.34.75.75.75h20.5c.41 0 .75-.34.75-.75v-.5c0-1.8-1.46-3.25-3.25-3.25H6.25z" fill={primaryFill} /></svg>;
}

const BuildingBank28Filled = wrapIcon(rawSvg({}), 'BuildingBank28Filled');
export default BuildingBank28Filled;
      