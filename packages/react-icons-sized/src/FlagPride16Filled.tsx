import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path fill="#745125" d="M3 3h10v1H3z" /><path fill="#E62C46" d="M3 4h10v1H3z" /><path fill="#F36D38" d="M3 5h10v1H3z" /><path fill="#FFD23E" d="M3 6h10v1H3z" /><path fill="#61BC51" d="M3 7h10v1H3z" /><path fill="#1793E8" d="M3 8h10v1H3z" /><path fill="#B73FBB" d="M3 9h10v1H3z" /><path d="M2.5 2h11c.28 0 .5.22.5.5v8a.5.5 0 01-.5.5H3v2.5a.5.5 0 01-1 0v-11c0-.28.22-.5.5-.5zM3 3v7h10V3H3z" fill={primaryFill} /></svg>;
}

const FlagPride16Filled = wrapIcon(rawSvg({}), 'FlagPride16Filled');
export default FlagPride16Filled;
      