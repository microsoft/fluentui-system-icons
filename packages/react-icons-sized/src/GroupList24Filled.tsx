import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 12h3a1 1 0 01.12 2H4v5h2a1 1 0 011 .88V20a1 1 0 01-.88 1H3a1 1 0 01-1-.88V13a1 1 0 01.88-1H3zm18 5a1 1 0 01.12 2H9a1 1 0 01-.12-2H21zm0-3a1 1 0 01.12 2H9a1 1 0 01-.12-2H21zM6 2a1 1 0 01.12 2H4v5h2a1 1 0 011 .88V10a1 1 0 01-.88.99H3a1 1 0 01-1-.88V3a1 1 0 01.88-1H6zm15 5a1 1 0 01.12 2H9a1 1 0 01-.12-2H21zm0-3a1 1 0 01.12 2H9a1 1 0 01-.12-2H21z" fill={primaryFill} /></svg>;
}

const GroupList24Filled = wrapIcon(rawSvg({}), 'GroupList24Filled');
export default GroupList24Filled;
      