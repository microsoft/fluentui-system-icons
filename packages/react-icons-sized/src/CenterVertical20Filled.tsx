import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 3a.5.5 0 000 1h15a.5.5 0 000-1h-15zM2 16.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zM6 7a2 2 0 00-2 2v2c0 1.1.9 2 2 2h8a2 2 0 002-2V9a2 2 0 00-2-2H6z" fill={primaryFill} /></svg>;
}

const CenterVertical20Filled = wrapIcon(rawSvg({}), 'CenterVertical20Filled');
export default CenterVertical20Filled;
      