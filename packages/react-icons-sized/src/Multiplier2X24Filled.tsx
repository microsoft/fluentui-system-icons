import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.49 9.67a1 1 0 01-1.98-.33c-.03.2 0 0 0 0v-.02a1.83 1.83 0 01.04-.13 3.02 3.02 0 01.55-1.17 3.29 3.29 0 012.75-1.27c1.13 0 2.14.36 2.8 1.19.64.81.77 1.89.59 2.98a2.87 2.87 0 01-1.41 2.05c-.44.27-1 .47-1.43.62l-.34.13c-.53.2-.88.39-1.12.67-.12.14-.23.33-.32.61h3.63a1 1 0 010 2H6.5a1 1 0 01-1-1c0-1.25.32-2.2.91-2.9a4.55 4.55 0 011.93-1.25l.55-.2c.37-.14.65-.23.9-.39a.88.88 0 00.48-.68c.13-.76-.02-1.18-.2-1.4-.15-.21-.5-.43-1.22-.43-.7 0-1 .27-1.15.48a1.29 1.29 0 00-.21.43v.01zm0 0v-.01zm0 0zm7.22 2.62a1 1 0 10-1.42 1.42l.8.79-.8.8a1 1 0 001.42 1.4l.79-.79.8.8a1 1 0 101.4-1.42l-.79-.79.8-.8a1 1 0 00-1.42-1.4l-.79.79-.8-.8z" fill={primaryFill} /></svg>;
}

const Multiplier2X24Filled = wrapIcon(rawSvg({}), 'Multiplier2X24Filled');
export default Multiplier2X24Filled;
      