import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.53 6.36A2 2 0 0111 3a2 2 0 011.66 3.12 5.52 5.52 0 00-3.13.24zM6.21 13h-.15C3.45 13 2 12.1 2 10.27V9.5C2 8.67 2.67 8 3.5 8h3.76a5.48 5.48 0 00-1.05 5zM8.5 4.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zm-1.5 7a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H12a.5.5 0 010-1h.47a1.98 1.98 0 00-1.72-.1 2 2 0 00-.66.44.5.5 0 01-.71-.71A3 3 0 0113 9.15V9c0-.28.22-.5.5-.5zm-.88 5.53a3 3 0 01-2.62-.18V14a.5.5 0 01-1 0v-1.5c0-.28.22-.5.5-.5H11a.5.5 0 010 1h-.47a1.97 1.97 0 00.94.25 2 2 0 001.44-.59.5.5 0 01.71.71 3 3 0 01-1 .66z" fill={primaryFill} /></svg>;
}

const PeopleSync16Filled = wrapIcon(rawSvg({}), 'PeopleSync16Filled');
export default PeopleSync16Filled;
      