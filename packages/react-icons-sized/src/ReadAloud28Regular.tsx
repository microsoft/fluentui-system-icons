import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.57 2.93a.75.75 0 011-.36 12.64 12.64 0 016.93 12.21.75.75 0 11-1.5-.06c.27-6.41-3.85-9.76-6.07-10.79a.75.75 0 01-.36-1zm-6.12 1.55a.75.75 0 00-1.4 0l-7 18.5a.75.75 0 101.4.54L6.54 18h8.42l2.09 5.52a.75.75 0 001.4-.54l-7-18.5zM14.4 16.5H7.11l3.64-9.63 3.64 9.63zm3.8-9.86a.75.75 0 10-.88 1.22c1.68 1.2 3.19 2.68 3.19 5.39a.75.75 0 101.5 0c0-3.44-2-5.31-3.81-6.61z" fill={primaryFill} /></svg>;
}

const ReadAloud28Regular = wrapIcon(rawSvg({}), 'ReadAloud28Regular');
export default ReadAloud28Regular;
      