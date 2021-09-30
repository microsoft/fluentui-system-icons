import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.25c0-.41.34-.75.75-.75h8.5a.75.75 0 010 1.5h-8.5A.75.75 0 012 5.25zm0 5c0-.41.34-.75.75-.75h8.5a.75.75 0 010 1.5h-8.5a.75.75 0 01-.75-.75zm.75 4.25a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM18.31 4.25a.75.75 0 10-1.12-1l-1.72 1.91-.69-.69a.75.75 0 10-1.06 1.06l1.25 1.25a.75.75 0 001.09-.03l2.25-2.5zm-.06 8.94c.31.28.33.75.06 1.06l-2.25 2.5a.75.75 0 01-1.09.03l-1.25-1.25a.75.75 0 111.06-1.06l.7.7 1.71-1.92a.75.75 0 011.06-.06z" fill={primaryFill} /></svg>;
}

const MultiselectRlt20Filled = wrapIcon(rawSvg({}), 'MultiselectRlt20Filled');
export default MultiselectRlt20Filled;
      