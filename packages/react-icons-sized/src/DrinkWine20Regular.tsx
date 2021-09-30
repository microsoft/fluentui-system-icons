import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.45 8.08a.5.5 0 00-.98-.17 2.5 2.5 0 01-2.05 2.05.5.5 0 00.16 1 3.5 3.5 0 002.87-2.88z" fill={primaryFill} /><path d="M5.5 2a.5.5 0 00-.5.5V8a5 5 0 004.5 5v4h-2a.5.5 0 000 1h5a.5.5 0 000-1h-2v-4-.02A5 5 0 0015 8V2.5a.5.5 0 00-.5-.5h-9zM6 5.5V3h8v2.5H6zm0 1h8V8a4 4 0 01-8 0V6.5z" fill={primaryFill} /></svg>;
}

const DrinkWine20Regular = wrapIcon(rawSvg({}), 'DrinkWine20Regular');
export default DrinkWine20Regular;
      