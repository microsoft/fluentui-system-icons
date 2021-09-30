import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.75A3.75 3.75 0 016.75 3h14.5A3.75 3.75 0 0125 6.75v7.75A7.5 7.5 0 0014.5 25H6.75A3.75 3.75 0 013 21.25V6.75zM20.5 27a6.5 6.5 0 110-13 6.5 6.5 0 010 13zm1.65-9.85a.5.5 0 000 .7L23.29 19h-2.54A3.75 3.75 0 0017 22.75V23a.5.5 0 001 0v-.25A2.75 2.75 0 0120.75 20h2.54l-1.14 1.15a.5.5 0 00.7.7l2-2a.5.5 0 000-.7l-2-2a.5.5 0 00-.7 0z" fill={primaryFill} /></svg>;
}

const SquareArrowForward28Filled = wrapIcon(rawSvg({}), 'SquareArrowForward28Filled');
export default SquareArrowForward28Filled;
      