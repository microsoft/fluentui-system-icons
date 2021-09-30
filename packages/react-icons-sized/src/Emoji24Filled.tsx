import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zM8.46 14.78a.75.75 0 10-1.18.93 6 6 0 009.43 0 .75.75 0 00-1.18-.92 4.5 4.5 0 01-7.07 0zM9 8.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm6 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill={primaryFill} /></svg>;
}

const Emoji24Filled = wrapIcon(rawSvg({}), 'Emoji24Filled');
export default Emoji24Filled;
      