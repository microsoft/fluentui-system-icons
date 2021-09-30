import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 3C1.67 3 1 3.67 1 4.5v3A5.5 5.5 0 0011.8 9h.7a2.5 2.5 0 000-5h-.59c-.2-.58-.76-1-1.41-1h-8zM12 5h.5a1.5 1.5 0 010 3h-.52l.02-.5V5zM2 4.5c0-.28.22-.5.5-.5h8c.28 0 .5.22.5.5v3a4.5 4.5 0 01-9 0v-3z" fill={primaryFill} /></svg>;
}

const DrinkCoffee16Regular = wrapIcon(rawSvg({}), 'DrinkCoffee16Regular');
export default DrinkCoffee16Regular;
      