import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 3a.5.5 0 00-.5.5v4c0 .28.22.5.5.5h1c.28 0 .5.22.5.5v.62l1.74-1.05A.5.5 0 017 8h1.5a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-5zM2 3.5C2 2.67 2.67 2 3.5 2h5c.83 0 1.5.67 1.5 1.5v4C10 8.33 9.33 9 8.5 9H7.14l-2.38 1.43A.5.5 0 014 10V9h-.5A1.5 1.5 0 012 7.5v-4z" fill={primaryFill} /></svg>;
}

const Comment12Regular = wrapIcon(rawSvg({}), 'Comment12Regular');
export default Comment12Regular;
      