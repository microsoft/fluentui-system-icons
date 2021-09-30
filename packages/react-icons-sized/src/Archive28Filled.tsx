import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 10v11.25A3.75 3.75 0 0119.25 25H8.75A3.75 3.75 0 015 21.25V10h18zm-6.75 3.5h-4.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5zm6-10.5c.97 0 1.75.78 1.75 1.75v2.5C24 8.22 23.22 9 22.25 9H5.75C4.78 9 4 8.22 4 7.25v-2.5C4 3.78 4.78 3 5.75 3h16.5z" fill={primaryFill} /></svg>;
}

const Archive28Filled = wrapIcon(rawSvg({}), 'Archive28Filled');
export default Archive28Filled;
      