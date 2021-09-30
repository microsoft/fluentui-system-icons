import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 9.5h4.75a.75.75 0 000-1.5h-6.5a.75.75 0 00-.75.75v6.5a.75.75 0 001.5 0v-4.64l5.22 5.17a.75.75 0 001.06-1.06L10.5 9.5z" fill={primaryFill} /><path d="M22 12a10 10 0 11-20 0 10 10 0 0120 0zm-10 8.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17z" fill={primaryFill} /></svg>;
}

const ArrowCircleUpLeft24Regular = wrapIcon(rawSvg({}), 'ArrowCircleUpLeft24Regular');
export default ArrowCircleUpLeft24Regular;
      