import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 11.5v.5a.5.5 0 01-.5.5H6v.5a1 1 0 01-1 1H3a1 1 0 01-1-1v-1.3a1 1 0 01.3-.7l3.86-3.87A4 4 0 1110 10H9v1a.5.5 0 01-.5.5h-1zM11 6a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
}

const Key16Filled = wrapIcon(rawSvg({}), 'Key16Filled');
export default Key16Filled;
      