import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3a9 9 0 014.98 16.5h1.77a.75.75 0 01.1 1.5h-4.1a.75.75 0 01-.74-.65l-.01-.1v-4a.75.75 0 011.5-.1v2.49A7.5 7.5 0 104.5 12 .75.75 0 013 12a9 9 0 019-9zm0 6.25a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zm0 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill={primaryFill} /></svg>;
}

const ArrowRotateClockwise24Regular = wrapIcon(rawSvg({}), 'ArrowRotateClockwise24Regular');
export default ArrowRotateClockwise24Regular;
      