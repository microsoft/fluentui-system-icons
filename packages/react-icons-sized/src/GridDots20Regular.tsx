import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 4a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm12 12a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM16 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM17.25 4a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM10 17.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM11.25 10a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM10 5.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM5.25 16a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM4 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill={primaryFill} /></svg>;
}

const GridDots20Regular = wrapIcon(rawSvg({}), 'GridDots20Regular');
export default GridDots20Regular;
      