import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM5 10a5 5 0 0110-.05l-2.42 2.4a3.5 3.5 0 10-.23.23l-2.08 2.09c-.1.1-.2.21-.28.33A5 5 0 015 10zm5-6.5c3.28 0 5.99 2.43 6.43 5.59.5-.13 1.02-.12 1.52.03A8 8 0 109 17.93c0-.09.02-.18.05-.28l.3-1.19A6.5 6.5 0 0110 3.5zm.98 11.88l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.01z" fill={primaryFill} /></svg>;
}

const TargetEdit20Filled = wrapIcon(rawSvg({}), 'TargetEdit20Filled');
export default TargetEdit20Filled;
      