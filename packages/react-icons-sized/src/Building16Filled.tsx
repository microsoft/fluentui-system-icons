import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 2C4.67 2 4 2.67 4 3.5v10c0 .28.22.5.5.5H6v-2.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V14h1.5a.5.5 0 00.5-.5v-5c0-.83-.67-1.5-1.5-1.5H11V3.5c0-.83-.67-1.5-1.5-1.5h-4zM7 4.5a.5.5 0 11-1 0 .5.5 0 011 0zM7 7a.5.5 0 11-1 0 .5.5 0 011 0zm0 2.5a.5.5 0 11-1 0 .5.5 0 011 0zm2-5a.5.5 0 11-1 0 .5.5 0 011 0zM9 7a.5.5 0 11-1 0 .5.5 0 011 0zm0 2.5a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0zM10 14v-2H9v2h1zm-2 0v-2H7v2h1z" fill={primaryFill} /></svg>;
}

const Building16Filled = wrapIcon(rawSvg({}), 'Building16Filled');
export default Building16Filled;
      