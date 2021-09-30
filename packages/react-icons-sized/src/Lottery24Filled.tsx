import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.56 4.17A6 6 0 0012 6.68a6 6 0 00-3.56-2.5 4 4 0 017.12 0z" fill={primaryFill} /><path d="M4.06 14.04a8 8 0 016.98-6.98 5 5 0 10-6.98 6.98z" fill={primaryFill} /><path d="M19.94 14.04a5 5 0 10-6.98-6.98 8 8 0 016.98 6.98z" fill={primaryFill} /><path d="M12 22a7 7 0 100-14 7 7 0 000 14zm-2.5-8.75c0-.41.34-.75.75-.75h4.25a.75.75 0 01.5 1.31l-.02.02a3.24 3.24 0 00-.26.26 9.55 9.55 0 00-2.25 3.86.75.75 0 11-1.44-.4c.4-1.5 1.15-2.7 1.78-3.54l.01-.01h-2.57a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const Lottery24Filled = wrapIcon(rawSvg({}), 'Lottery24Filled');
export default Lottery24Filled;
      