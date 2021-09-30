import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 8a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M9 8a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M12 9a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
}

const MoreHorizontal16Regular = wrapIcon(rawSvg({}), 'MoreHorizontal16Regular');
export default MoreHorizontal16Regular;
      