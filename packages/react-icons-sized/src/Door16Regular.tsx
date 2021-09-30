import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 9a1 1 0 100-2 1 1 0 000 2zM5 1a2 2 0 00-2 2v10c0 1.1.9 2 2 2h6a2 2 0 002-2V3a2 2 0 00-2-2H5zM4 3a1 1 0 011-1h6a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V3z" fill={primaryFill} /></svg>;
}

const Door16Regular = wrapIcon(rawSvg({}), 'Door16Regular');
export default Door16Regular;
      