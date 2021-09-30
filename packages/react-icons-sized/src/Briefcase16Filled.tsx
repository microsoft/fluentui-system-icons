import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 2h5c.28 0 .5.22.5.5V5h1a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2V7c0-1.1.9-2 2-2h1V2.5c0-.28.22-.5.5-.5zM10 5V3H6v2h4z" fill={primaryFill} /></svg>;
}

const Briefcase16Filled = wrapIcon(rawSvg({}), 'Briefcase16Filled');
export default Briefcase16Filled;
      