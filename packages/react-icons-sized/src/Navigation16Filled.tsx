import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 3.75c0-.41.34-.75.75-.75h10.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zm0 4c0-.41.34-.75.75-.75h10.5a.75.75 0 010 1.5H2.75A.75.75 0 012 7.75zm0 4c0-.41.34-.75.75-.75h10.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const Navigation16Filled = wrapIcon(rawSvg({}), 'Navigation16Filled');
export default Navigation16Filled;
      