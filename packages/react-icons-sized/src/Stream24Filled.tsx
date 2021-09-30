import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 11a7 7 0 017-7h1.5a1 1 0 100-2H16a9 9 0 00-9 9 1 1 0 01-1 1H3a1 1 0 100 2h3a3 3 0 003-3zm8-3a4 4 0 00-4 4 6 6 0 01-6 6H3a1 1 0 110-2h4a4 4 0 004-4 6 6 0 016-6h4a1 1 0 110 2h-4zm1 4a1 1 0 00-1 1 9 9 0 01-9 9H6a1 1 0 110-2h2a7 7 0 007-7 3 3 0 013-3h3a1 1 0 110 2h-3z" fill={primaryFill} /></svg>;
}

const Stream24Filled = wrapIcon(rawSvg({}), 'Stream24Filled');
export default Stream24Filled;
      