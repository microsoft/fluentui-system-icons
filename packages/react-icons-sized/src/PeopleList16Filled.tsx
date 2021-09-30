import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 8c.17 0 .34.03.5.09-.58.2-1 .76-1 1.41v3.28c-.54.15-1.2.22-1.94.22C3.45 13 2 12.1 2 10.27V9.5C2 8.67 2.67 8 3.5 8h5zM6 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm5 1a2 2 0 110 4 2 2 0 010-4zM9.5 9a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 2a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 2a.5.5 0 000 1h5a.5.5 0 000-1h-5z" fill={primaryFill} /></svg>;
}

const PeopleList16Filled = wrapIcon(rawSvg({}), 'PeopleList16Filled');
export default PeopleList16Filled;
      