import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.94 5C2.87 5 2 5.87 2 6.94V12a8 8 0 0015.91 1.2h.74a3.35 3.35 0 000-6.7h-.7c-.2-.86-.97-1.5-1.9-1.5H3.96zM18 8h.65a1.85 1.85 0 110 3.7H18V8z" fill={primaryFill} /></svg>;
}

const DrinkCoffee24Filled = wrapIcon(rawSvg({}), 'DrinkCoffee24Filled');
export default DrinkCoffee24Filled;
      