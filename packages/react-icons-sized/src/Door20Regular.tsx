import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 11a1 1 0 100-2 1 1 0 000 2zM4 4c0-1.1.9-2 2-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 13h8a1 1 0 001-1V4a1 1 0 00-1-1H6a1 1 0 00-1 1v12a1 1 0 001 1z" fill={primaryFill} /></svg>;
}

const Door20Regular = wrapIcon(rawSvg({}), 'Door20Regular');
export default Door20Regular;
      