import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.6 7.99A4 4 0 0120.93 5l.47.18a1 1 0 10.7-1.88l-.47-.17a6 6 0 00-8 4.46l-.86 4.4H7.75a1 1 0 100 2h4.63l-.98 5.01A4 4 0 016.07 22l-.47-.18a1 1 0 10-.7 1.88l.47.17a6 6 0 008-4.46l1.05-5.4h4.83a1 1 0 100-2h-4.44l.79-4.01z" fill={primaryFill} /></svg>;
}

const FStop28Filled = wrapIcon(rawSvg({}), 'FStop28Filled');
export default FStop28Filled;
      