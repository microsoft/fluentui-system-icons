import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 2a.5.5 0 00-.5.5V8a5 5 0 004.5 5v4h-2a.5.5 0 000 1h5a.5.5 0 000-1h-2v-4-.02A5 5 0 0015 8V2.5a.5.5 0 00-.5-.5h-9zM6 5.5V3h8v2.5H6zm7.45 2.58a3.5 3.5 0 01-2.87 2.87.5.5 0 11-.16-.99 2.5 2.5 0 002.05-2.05.5.5 0 01.98.17z" fill={primaryFill} /></svg>;
}

const DrinkWineFilled = wrapIcon(rawSvg({}), 'DrinkWineFilled');
export default DrinkWineFilled;
      