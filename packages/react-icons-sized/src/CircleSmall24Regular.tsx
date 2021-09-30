import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM8 12a4 4 0 118 0 4 4 0 01-8 0z" fill={primaryFill} /></svg>;
}

const CircleSmall24Regular = wrapIcon(rawSvg({}), 'CircleSmall24Regular');
export default CircleSmall24Regular;
      