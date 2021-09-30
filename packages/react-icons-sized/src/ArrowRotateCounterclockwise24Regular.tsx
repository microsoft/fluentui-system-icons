import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3a9 9 0 00-4.98 16.5H5.25a.75.75 0 00-.1 1.5h4.1c.38 0 .7-.28.74-.65l.01-.1v-4a.75.75 0 00-1.5-.1v2.49a7.5 7.5 0 1111-6.64.75.75 0 001.5 0 9 9 0 00-9-9zm0 6.25a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zm0 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /></svg>;
}

const ArrowRotateCounterclockwise24Regular = wrapIcon(rawSvg({}), 'ArrowRotateCounterclockwise24Regular');
export default ArrowRotateCounterclockwise24Regular;
      