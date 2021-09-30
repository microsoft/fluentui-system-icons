import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm.78 5.47l-.08-.07a.75.75 0 00-.89-.01l-.09.08-.07.08c-.2.27-.2.62 0 .89l.07.1 2.72 2.71H7.65c-.33.05-.6.32-.64.65L7 12v.1c.05.33.32.6.65.64l.1.01h6.69l-2.72 2.72-.07.08a.75.75 0 001.05 1.05l.08-.07 4-4 .07-.08c.2-.26.2-.62.01-.89l-.08-.09-4-4-.08-.07.08.07z" fill={primaryFill} /></svg>;
}

const ArrowCircleRight24Filled = wrapIcon(rawSvg({}), 'ArrowCircleRight24Filled');
export default ArrowCircleRight24Filled;
      