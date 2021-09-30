import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.25 13.5a.75.75 0 010 1.5h-4.5a.75.75 0 010-1.5h4.5zm2-4.25a.75.75 0 010 1.5h-8.5a.75.75 0 010-1.5h8.5zm2-4.25a.75.75 0 010 1.5H3.75a.75.75 0 010-1.5h12.5z" fill={primaryFill} /></svg>;
}

const Filter20Filled = wrapIcon(rawSvg({}), 'Filter20Filled');
export default Filter20Filled;
      