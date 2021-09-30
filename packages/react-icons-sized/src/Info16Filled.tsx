import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 100 12A6 6 0 008 2zm.75 3.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM8 7c.28 0 .5.22.5.5v3a.5.5 0 01-1 0v-3c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const Info16Filled = wrapIcon(rawSvg({}), 'Info16Filled');
export default Info16Filled;
      