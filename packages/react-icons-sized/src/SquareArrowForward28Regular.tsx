import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.75A3.75 3.75 0 016.75 3h14.5A3.75 3.75 0 0125 6.75v7.75a7.49 7.49 0 00-1.5-.88V6.75c0-1.24-1-2.25-2.25-2.25H6.75c-1.24 0-2.25 1-2.25 2.25v14.5c0 1.24 1 2.25 2.25 2.25h6.87c.24.54.53 1.04.88 1.5H6.75A3.75 3.75 0 013 21.25V6.75zM14 20.5a6.5 6.5 0 1013 0 6.5 6.5 0 00-13 0zm8.15-2.65a.5.5 0 01.7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7-.7L23.29 20h-2.54A2.75 2.75 0 0018 22.75V23a.5.5 0 01-1 0v-.25A3.75 3.75 0 0120.75 19h2.54l-1.14-1.15z" fill={primaryFill} /></svg>;
}

const SquareArrowForward28Regular = wrapIcon(rawSvg({}), 'SquareArrowForward28Regular');
export default SquareArrowForward28Regular;
      